import './App.css';
//import App from './App.js'
import axios from "axios";
import {useState,useEffect} from 'react';
import React from "react";
import ReactDOM from 'react-dom/client';

export default function BooksTable(props){

  return(
    <div>      
      {
        props.books && props.books.length > 0 ?
          (props.books.map((i,index) => (
            <div>
              {/* <img src={"Assets/images/{{i.image}}"} height="150px"/> */}
              <img src={process.env.PUBLIC_URL+"assets/images/"+i.image} height="150px"/>
            <h2>Title:{" "}{i.title}</h2>
            <h2>Author:{" "}{i.author}</h2>
            <p>Year:{" "}{i.year}</p>
            <p>Publications:{" "}{i.publication}</p>
            <p>Ratings:{" "}{i.ratings}</p>
            <p>Genre:{" "}{i.genre}</p>
            </div>
          )
            )):(<div>Book not found!please try again</div>)
        
        }
        </div>
        );
}
