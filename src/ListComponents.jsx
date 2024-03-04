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

const ListComponents = () => <List list={list} />;

const List = ({list}) => (
  <ul>
    {list.map(item => (
    <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

const ListItem = ({item}) => (
  <li>
  <div>{item.id}</div>  
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>

  </li>
);

export default ListComponents;