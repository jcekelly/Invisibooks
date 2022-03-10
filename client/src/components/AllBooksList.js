import './AllBook.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";




export default function AllBooksList() {

    const [books, setBooks] = useState([])

    const storedToken = localStorage.getItem('authToken')


    const getAllBooks = () => {
        axios
          .get(`http://localhost:5005/api/`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
			{books && books.map(book => 
      
            <ul>
            <li>{book.fiction ? <p>Fiction</p> : <p>Non-Fiction</p>}</li> 
            <li> <p className='quote-text'> "{book.description}" </p> </li>
            <li> {book.genre} </li>
            <li> {book.language} </li> 
            <div className='requestDiv'>
            <Link className='requestLink' to={`/books/${book._id}`}> Request </Link>
            </div>


            </ul>
            
            )}
            </div>
		</>
	)
}



