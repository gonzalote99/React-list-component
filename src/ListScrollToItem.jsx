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
  {
    id: 'c',
    firstname: 'ro',
    lastname: 'dav',
    year: 17,
  },
  {
    id: 'c',
    firstname: 'dav',
    lastname: 'wi',
    year: 16 ,
  },

];

const ListToScrollToItem = () => (
  <ul>
    {list.map(item => {
    const ref = React.createRef();
     const handleClick = () => 
       ref.current.scrollIntoView({
         behavior: 'smooth',
         block: 'start',
       });

    return(
      <li
        key={item.id}
        ref={ref}
        style={{height: '250px', border: '1px solid black'}}
        >
        <div>{item.id}</div>       
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
        <button type='button' onClick={handleClick}>scroll into view</button>

     
      
      </li>
    );
    
    } ) }
  </ul>
);

export default ListToScrollToItem;