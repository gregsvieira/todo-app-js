import React, { memo } from "react";
import { useList } from "./ListProvider";
import './styles.css';

const Item = ({ id, content, checked }) => {
  const { checkedItem, removeItem } = useList();

  const handleRemoveItem = () => removeItem?.(id);
  const handleCheckItem = () => checkedItem?.(id);

  return (
    <div className="todo__card">
      <input type="checkbox" value={checked} onClick={handleCheckItem} />
      <p className="item__content">{content}</p>
      <button
        className="button button--delete-icon item__delete-action"
        onClick={handleRemoveItem}
      >
        x
      </button>
    </div>
  )
}

export default memo(Item);