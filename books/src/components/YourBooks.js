import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useContext } from 'react'; // <== ADD
import { AuthContext } from '../context/auth'; 



export default function YourBooks(props) { 
	
	const [books, setBooks] = useState([])

    const storedToken = localStorage.getItem('authToken')

	const creator  = useContext(AuthContext)

	const handleDelete = () => {
		// delete route
	}



    const getAllBooks = () => {
        axios
          .get(`http://localhost:5005/api/my-books`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => setBooks(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getAllBooks();
      }, [] );

	  
	console.log(creator)

    

    return (
		<>

			<h1>Your Books</h1>
      <div className='listDiv'>
			{books.map(book => 
            <ul>
            <li>{book.fiction ? <p>Fiction</p> : <p>Non-Fiction</p>}</li> 
            <li> <p className='quote-text'> "{book.description}" </p> </li>
            <li> '{book.genre}' </li>
            <li> {book.language} </li> 

			<button onChange={handleDelete}> Delete </button>


            </ul>
            
            )}
            </div>
		</>
	)
}