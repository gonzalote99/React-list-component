import React from 'react';

const list = ['a', 'b', 'c'];

const SimpleList = () => (
  <ul>
    {list.map(item => (
    <li key={item}>{item}</li>
    )
    
    )}
  </ul>
)
export default SimpleList;