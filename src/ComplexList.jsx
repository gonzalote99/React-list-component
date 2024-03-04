import React from 'react';

const list = [
  {
    id: 'a',
    firstname: 'rob',
    lastname: 'wie',
    year: 19 ,
  },
  {
    id: 'b',
    firstname: 'dav',
    lastname: 'da',
    year: 23,
  },
];

const ComplexList = () => (
  <ul>
    {list.map(item => (
    <li key={item.id}>
     <div>{item.id}</div>     
      <div>{item.firstname}</div>
       <div>{item.lastname}</div>
       <div>{item.year}</div>
       

    </li>
    ))}
  </ul>
);

export default ComplexList;