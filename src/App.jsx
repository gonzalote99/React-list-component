import React from 'react';
import SimpleList from './SimpleList';
import ComplexList from './ComplexList';
import ListComponents from './ListComponents';
import ListWithAddItem from './ListWithAddItem';
import ListWithUpdateItem from './ListWidthUpdateItem';
import ListWithRemoveItem from './ListWithRemoveItem';
import NestedList from './NestedList';
import {ListWithUnstableIndex, ListWithStableIndex} from './ListWithSort';
import ListScrollToItem from './ListScrollToItem';
import ListScrollToItemOutside from './ListScrollToItemOutside';

const App = () => (
  <div>
  <h1>list examples</h1>
    <h2>simple list</h2>
    <SimpleList />
     <h2>complex list</h2>
    <ComplexList />
    <h2>list components</h2>
    <ListComponents />
    <h2>list add</h2>
    <ListWithAddItem />
    <h2>list update</h2>
    <ListWithUpdateItem />
    <h2>list remove</h2>
    <ListWithRemoveItem />
    <h2>list nested</h2>
    <NestedList />
    <h2>list unstable index</h2>
    <ListWithStableIndex />
    <h2>list stable index</h2>
    <ListWithStableIndex />
    <h2>list scroll from within</h2>
    <ListScrollToItem />
    <h2>list scroll from outside</h2>
    <ListScrollToItemOutside />
  </div>
);

export default App;