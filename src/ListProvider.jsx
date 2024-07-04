import React, {
  useState,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import DEFAULT_ITEMS from './constants'
import _ from 'lodash';

const ListContext = createContext(undefined);

const ListProvider = ({ children }) => {

  const sortedItems = _.sortBy(DEFAULT_ITEMS, ['checked']);

  const [items, setItems] = useState(sortedItems);

  const addItem = useCallback((content) => {
    if (!content) {
      return;
    }
    const lastItem = items[items.length - 1];

    const lastId = !lastItem ? 0 : lastItem.id +1;

    setItems([...items, {id: lastId, content, checked: false}]) 
  }, [items, setItems]);

  const removeItem = useCallback((id) => {
    const newItems = items.filter((item) => item.id !== id)
    
    setItems(newItems);
  }, [items, setItems]);

  const checkItem = useCallback((id) => {
    const updatedItems = items.map((item) => item.id === id 
    ? {...item, checked: item.checked } 
    : item);
    
    setItems(updatedItems);
  }, [items, setItems]);

  
  const value = useMemo(
    () => ({ addItem, removeItem, checkItem, items }),
    [addItem, removeItem, checkItem, items]
  )

  return <ListContext.Provider {...{value}}>{children}</ListContext.Provider>
}

export const useList = () => {
  const context = useContext(ListContext);
  return context;
};

export default ListProvider;

