import React, { useCallback, useState } from "react";
import { useList } from "./ListProvider";
import './styles.css';

const AddItem = () => {
  const { addItem } = useList();
  const [value, setValue] = useState('');

  const handleAddItem = () => {
    addItem?.(value);
    setValue('');
  }

  const onChange = useCallback((event) => setValue(event.target.value), []);

  return (
    <div className="add-item">
      <input
        className="add-item__input"
        placeholder="Do..."
        {...{ onChange, value }}
      />
      <button className="button" onClick={handleAddItem}>
        +
      </button>
    </div>
  ) 
}

export default AddItem;