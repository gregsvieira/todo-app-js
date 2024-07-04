import React from "react";
import AddItem from './AddItem';
import { useList } from './ListProvider';
import Item from './Item';
import './styles.css';

const List = () => {
  const { items } = useList();

  return (
    <div className="list">
      <AddItem />
      <div className="list_items">
        {items?.map((item) => (
          <Item key={item.content} {...item} />
        ))}
      </div>
    </div>
  )
}

export default List;