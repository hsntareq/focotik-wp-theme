import { useState } from '@wordpress/element';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Sortable Item Component
const SortableItem = ({ id, item, onRemove }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="item">
      {item}
      <button className="item-remove" onClick={() => onRemove(id)}>
        ×
      </button>
    </div>
  );
};

// Main EmailInput Component
const EmailInput = ({ items = [], setItems }) => {
  const [inputValue, setInputValue] = useState('');

  // Add item to the list
  const handleAddItem = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newItem = inputValue.trim();
      if (newItem && !items.includes(newItem)) {
        setItems([...items, newItem]);
        setInputValue('');
      }
    }
  };

  // Remove item from the list
  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((_, index) => index !== id);
    setItems(updatedItems);
  };

  // Handle backspace to remove the last item
  const handleBackspace = (e) => {
    if (e.key === 'Backspace' && inputValue === '' && items.length > 0) {
      const updatedItems = items.slice(0, -1);
      setItems(updatedItems);
    }
  };

  // Handle drag-and-drop reordering
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Sensors for drag-and-drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="input-container">
          <div className="item-list">
            {items.map((item, index) => (
              <SortableItem key={index} id={index} item={item} onRemove={handleRemoveItem} />
            ))}
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              handleAddItem(e);
              handleBackspace(e);
            }}
            placeholder="Add an item..."
            className="input"
          />
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default EmailInput;
