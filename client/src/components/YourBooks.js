import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NavSideBar from './NavSideBar';
import { Navigate } from 'react-router-dom';




export default function YourBooks(props) { 
	
	const [books, setBooks] = useState([])
	const [bookID, setBookID] = useState('')

    const storedToken = localStorage.getItem('authToken')
	
	



    const getAllBooks = () => {
        axios
          .get(`http://localhost:5005/api/my-books`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => setBooks(response.data))
          .catch((error) => console.log(error));
      };

      useEffect(() => {
        getAllBooks();
      }, [] );


	

    

    return (
		<>
<NavSideBar />
			<h1>Your Books</h1>
      <div className='listDiv'>
			{books.map(book => 
            <ul>
            <li>{book.fiction ? <p>Fiction</p> : <p>Non-Fiction</p>}</li> 
            <li> <p className='quote-text'> "{book.description}" </p> </li>
            <li> '{book.genre}' </li>
            <li> {book.language} </li> 



			<button onClick={ () => {axios.delete(`http://localhost:5005/api/book/${book._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(deletedBook => {
                console.log(deletedBook)
				window.location.reload()
            })
            .catch(err => console.log(err))}}> Delete </button>


            </ul>
            
            )}
            </div>
		</>
	)
}