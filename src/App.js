import React from 'react';
import { Navbar } from './components/navbar';
import { Search } from './components/search';
import { Movies } from './components/movies';


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <Movies />
    </div>
  );
};

export default App;
