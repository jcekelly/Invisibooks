import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';





export default function SwapCard() {
	
	const { id } = useParams()

	const [book, setBook] = useState(null);

	const storedToken = localStorage.getItem('authToken')


	useEffect(() => {
		axios.get(`http://localhost:5005/api/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setBook(response.data)
			})
			.catch(err => console.log(err))
	}, [])

    return book && (

		<div>
        <h3> {book.fiction ? <span>Fiction</span> : <span>Non-Fiction</span>} </h3> 
            <h3> <p className='quote-text'> "{book.description}" </p> </h3>
            <h3> '{book.genre}' </h3>
            <h3> {book.language} </h3> 
		</div>
	)
}