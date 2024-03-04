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
    lastname: 'da',
    year: 17,
  },
  {
    id: 'd',
    firstname: 'dav',
    lastname: 'wi',
    year: 16,
  },
];


const ListScrollToItem = () => {
  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = id => 
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    return(
      <div>
      <ul>
        {list.map(item => (
        <li key={item.id}>
          <button 
             type='button'
            onClick={() => handleClick(item.id)}
            >scroll item {item.id} into view</button>
        </li>
        )
          
        
        )}
      </ul>
        <ul>
          {list.map(item => (
        <li
          key={item.id}
          ref={refs[item.id]}
          style={{height: '250px', border: '1px solid black'}}
          >
          <div>{item.id}</div>         
          <div>{item.firstname}</div>
          <div>{item.lastname}</div>
          <div>{item.year}</div>

        </li>
          ))}
        </ul>
      </div>
    )
  }


  export default ListScrollToItem;
