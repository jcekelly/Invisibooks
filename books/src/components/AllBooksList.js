import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";



export default function AllBooksList() {

    const [books, setBooks] = useState([])

    const getAllBooks = () => {
        axios
          .get(`${API_URL}/api/`)
          .then((response) => setBooks(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getAllBooks();
      }, [] );


    return (
		<>
			<h1>All the Books</h1>
			{books.map(book => 
            <ul>
            <li> Genre: {book.genre} </li>
            <li> language: {book.language} </li> 
            </ul>
            
            )}
			
		</>
	)
}