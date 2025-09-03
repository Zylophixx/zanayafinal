import React from 'react';
import { KitItem, Religion } from '../types';
import { Check, Plus, X } from 'lucide-react';

interface KitSelectorProps {
  religion: Religion;
  availableItems: KitItem[];
  selectedItems: KitItem[];
  onToggleItem: (item: KitItem) => void;
}

export function KitSelector({ religion, availableItems, selectedItems, onToggleItem }: KitSelectorProps) {
  // Handle mutually exclusive items
  const handleItemToggle = (item: KitItem) => {
    // Don't allow toggling if it's required and mutually exclusive but none is selected
    if (item.required && item.mutuallyExclusive) {
      const groupItems = availableItems.filter(
        otherItem => otherItem.mutuallyExclusive === item.mutuallyExclusive
      );
      const hasSelectedInGroup = groupItems.some(groupItem => isSelected(groupItem));
      
      // If trying to deselect the only selected item in a required group, prevent it
      if (hasSelectedInGroup && isSelected(item) && groupItems.filter(groupItem => isSelected(groupItem)).length === 1) {
        return; // Don't allow deselecting the last item in a required group
      }
    }
    
    if (item.mutuallyExclusive) {
      // If this is a mutually exclusive item, first remove any other items in the same group
      const otherItemsInGroup = availableItems.filter(
        otherItem => otherItem.mutuallyExclusive === item.mutuallyExclusive && otherItem.id !== item.id
      );
      
      // Remove other items in the group from selection
      otherItemsInGroup.forEach(otherItem => {
        if (selectedItems.some(selected => selected.id === otherItem.id)) {
          onToggleItem(otherItem);
        }
      });
    }
    
    // Then toggle the current item
    onToggleItem(item);
  };

  const essentialItems = availableItems.filter(item => item.category === 'essential');
  const regionalItems = availableItems.filter(item => item.category === 'regional');
  const casteItems = availableItems.filter(item => item.category === 'caste');

  const isSelected = (item: KitItem) => selectedItems.some(selected => selected.id === item.id);

  const ItemCard = ({ item, canToggle = true }: { item: KitItem; canToggle?: boolean }) => {
    const selected = isSelected(item);
    const isMutuallyExclusive = item.mutuallyExclusive;
    const isOtherInGroupSelected = isMutuallyExclusive && 
      availableItems.some(otherItem => 
        otherItem.mutuallyExclusive === item.mutuallyExclusive && 
        otherItem.id !== item.id && 
        isSelected(otherItem)
      );
    
    // For required mutually exclusive items, always allow toggling
    const actualCanToggle = item.required && item.mutuallyExclusive ? true : canToggle;
    
    return (
      <div
        className={`bg-white rounded-lg p-4 border-2 transition-all duration-300 ${
          selected ? 'border-green-500 shadow-md' : 
          isOtherInGroupSelected ? 'border-gray-200 opacity-50' : 'border-gray-200'
        } ${actualCanToggle ? 'cursor-pointer hover:shadow-md hover:border-blue-300' : 'opacity-75'}`}
        onClick={actualCanToggle ? () => handleItemToggle(item) : undefined}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              {item.required && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                  Required
                </span>
              )}
              {item.mutuallyExclusive && (
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  Choose One
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3">{item.description}</p>
            <p className="font-bold text-lg text-blue-600">₹{item.price}</p>
          </div>
          <div className="ml-4">
            {item.required && !item.mutuallyExclusive ? (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
            ) : selected ? (
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Check size={16} className="text-white" />
              </div>
            ) : (
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-100">
                <Plus size={16} className="text-gray-600" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {religion.name} Last Rites Kit
        </h2>
        <p className="text-gray-600">Select items for your ceremony</p>
      </div>

      {/* Essential Items */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          Essential Items
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          These items are required for the ceremony. Please select all required items.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {essentialItems.map((item) => (
            <ItemCard key={item.id} item={item} canToggle={item.mutuallyExclusive ? true : false} />
          ))}
        </div>
      </div>

      {/* Regional Items */}
      {regionalItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Regional Add-ons (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {regionalItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Caste/Denomination Items */}
      {casteItems.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Caste/Sect Specific (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {casteItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {/* Price Summary */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold text-gray-900">Total Kit Price</h4>
            <p className="text-gray-600 text-sm">{selectedItems.length} items selected</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">₹{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}