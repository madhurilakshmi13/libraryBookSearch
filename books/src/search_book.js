import axios from "axios";
import BooksTable from './bookstable';
import {useState,useEffect} from 'react';
import './App.css';
import Ratings from "./ratings";
import ReactDOM from 'react-dom/client';

// main search component
export default function Search({search}){
    const [selectedOption, setSelectedOption] = useState('');
    const [isShown,setIsShown] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [booksList, setbooksList] = useState([])
    const [genre,setGenre] = useState('none');
    const [publicationYear, setpublicationYear] = useState('none');
    const [ratings, setRatings] = useState('none');
    const [resutlBookLIst, setresultBookLIst] = useState([])
    var tempBooklist;  
     
// to fetch data from REST API
const Fetch = async() => {
    const response = await axios.get('http://127.0.0.1:8000/home/')
    setbooksList(response.data);
    setresultBookLIst(response.data);
  }

 

  useEffect(() => {
    Fetch();
  },[]);

  // function that checks the search and returns the list of book items
  const formSubmit = (e) => {
    e.preventDefault();
    var tempBooklist = booksList;
    if (searchText !== " ") {
      tempBooklist = tempBooklist.filter(
        (book) =>
          book.title.toLowerCase().includes(searchText.toLowerCase()) ||
          book.author.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (publicationYear !== "none") {
      tempBooklist = tempBooklist.filter(
        (book) => book.year <= parseInt(publicationYear)
      );
    }
    if (genre !== "none") {
      tempBooklist = tempBooklist.filter((book) => book.genre === genre);
    }
    if (ratings !== "none") {
      tempBooklist = tempBooklist.filter(
        (book) => book.ratings <= parseFloat(ratings)
      );
    }
    setresultBookLIst(tempBooklist);
  };

    return (
        <div>
       {/* search and filter options in react */}
         <form onSubmit={formSubmit}>
         <br></br><input type="text" placeholder="  Enter book name/author name" size="60" class="text" id="text"  
          onChange={(e)=>setSearchText(e.target.value)}/><br></br><br></br>
        <br></br><br></br>
            <div class="check">
                <label>publication Year{"   "}</label>
                <select onChange={(e) => setpublicationYear(e.target.value)}>
                <option value="none">None</option>
                    <option value="2000">Below 2000</option>
                    <option value="2010">2000-2010</option>
                    <option value="2020">2010-2020</option>
                    <option value="2023">2020-present</option>
                    
                </select>
                   <br></br><br></br>
                   <label>Genre</label>
                <select onChange={(e) => setGenre(e.target.value)}>
                    <option value="none">None</option>
                    <option value="action">action</option>
                    <option value="Humor">Humor</option>
                    <option value="Horror">horror</option>
                    <option value="Thriller">thriller</option>
                    <option value="Romance">romance</option>
                    <option value="Science Fiction">Science-fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Mythological/History">Mythological/History</option>
                    <option value="Motivational">Motivational</option>
                    <option value="Autobiography">Autobiography</option>
                    
                </select>
                  <br/><br></br>
                  <label>ratings</label>
                <select onChange={(e) => setRatings(e.target.value)}>
                    <option value="none">None</option>
                    <option value="4"> 4.0</option>
                    <option value="4.5">4.0-4.5</option>
                    <option value="5.0">4.5-5.0</option>
                    
                </select>
                <br></br><br></br>
                 </div>
                 <input type="submit" value="Search"/>
                 </form>
                 <br></br><br></br>
                 <BooksTable books={resutlBookLIst}></BooksTable> 
        </div>
       );
}