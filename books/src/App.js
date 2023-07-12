import {useState,useEffect} from 'react';
import './App.css';
import BooksTable from './bookstable';
import Search from './search_book';

//import {Humor} from './genre';
import {Below2000} from './year';
import {Below4} from './ratings';
 import axios from "axios";
 import ReactDOM from 'react-dom/client';



// main component function
 function App() {


  return (
    <div className="App">
      
      {/* loads the search component  */}
      <Search></Search>
      
      
    </div>
  );
}

export default App;
