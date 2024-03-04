import React from 'react';

const list = [
  {
    id: 'a',
    firstname: 'ro',
    lastname: 'wi',
    year: 19, 
  },
  {
    id: 'b',
    firstname: 'dav',
    lastname: 'da',
    year: 18,
  },
];

const nestedLists = [list, list]

const NestedList = () => (
  <ul>
    {nestedLists.map((nestedList, index) => (
    <ul key={index}>
    <h4>list {index + 1}</h4>
      {nestedList.map(item => (
      <li key={item.id}>
       <div>{item.id}</div>       
        <div>{item.firstname}</div>
         <div>{item.lastname}</div>
         <div>{item.year}</div>

      </li>
      ))}
    </ul>
    ))}
  </ul>
)

export default NestedList;