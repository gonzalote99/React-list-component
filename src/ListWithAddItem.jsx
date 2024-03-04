import React, { useState } from 'react';

const initialList = [
  'react',
  'firebase',
  'graph'
];

const ListWithAddItem = () => {
  const [value, setValue ] = React.useState('');
  const [list, setList] = React.useState(initialList);

  const handleEvent = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    if(value) {
      setList(list.concat(value));
    }
    setValue('');

    event.preventDefault();
  };

  return(
    <div>
    <ul>
      {list.map(item => (
      <li key={item}>{item}</li>
      ) )}
    </ul>
      <form onSubmit={handleSubmit}>
         <input type='text' value={value} onChange={handleEvent} />
        <button type='submit' >add item</button>
      </form>
    </div>
  );
};

export default ListWithAddItem;