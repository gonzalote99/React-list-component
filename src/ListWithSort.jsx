import React from 'react';

const inititalList = ['react', 'graph'];

export const ListWithUnstableIndex = () => {
  const [list, setList] = React.useState(inititalList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return(
    <div>
    <ul>
      {list.map((item, index) => (
      <li key={index}>
       <label>
       <input type='checkbox' />
         {item}
       </label>
      </li>
      ))}
    </ul>

      <button type='button' onClick={handleClick}>reverse</button>
    </div>
  );
};

export const ListWithStableIndex = () => {
  const [list, setList] = React.useState(inititalList);

  const handleClick = event => {
    setList(list.slice().reverse());
  };

  return(
    <div>
    <ul>
      {list.map((item, index) => (
      <li key={item}>
       <label>
       <input type='checkbox' />
         {item}
       </label>
      </li>
      ))}
    </ul>

      <button type='button' onClick={handleClick}>reverse</button>
    </div>
  );
};
