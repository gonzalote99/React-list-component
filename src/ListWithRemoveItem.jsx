import React from 'react';

const initialList = [
  {id: 'a', name: 're'},  
  { id: 'b', name: 'fi'},
  {id: 'c', name: 'gr'},

];


const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  }

  return(
    <ul>
      {list.map(item => (
      <li key={item.id}>
        <label>{item.name}</label>
        <button type='button' onClick={() => handleClick(item.id)}>remove</button>
      </li>
      
      )) 
      
      }
    </ul>
  );
};

export default ListWithRemoveItem;