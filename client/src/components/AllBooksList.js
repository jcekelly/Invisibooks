import './AllBook.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const API_URL = "https://invisibooks.herokuapp.com/";



export default function AllBooksList() {

    const [books, setBooks] = useState([])

    const storedToken = localStorage.getItem('authToken')


    const getAllBooks = () => {
        axios
          .get(`${API_URL}/api/`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => setBooks(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getAllBooks();
      }, [] );

     

    return (
		<>

			<h1>Book Shelf</h1>
      <div className='listDiv'>
			{books.map(book => 
      
            <ul>
            <li>{book.fiction ? <p>Fiction</p> : <p>Non-Fiction</p>}</li> 
            <li> <p className='quote-text'> "{book.description}" </p> </li>
            <li> '{book.genre}' </li>
            <li> {book.language} </li> 
            <Link to={`/books/${book._id}`}> Request Book </Link>


            </ul>
            
            )}
            </div>
		</>
	)
}



