import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = "http://localhost:5005";


export default function AddBookForm(props) {
	const [fiction, setFiction] = useState(true)
	const [genre, setGenre] = useState('')
	const [language, setLanguage] = useState('')


	    
	const handleSubmit = e => {
		e.preventDefault()
		
		axios.post(`http://localhost:5005/api/books`, { fiction, genre, language })
		  .then((response) => {
			// Reset the state
			setFiction("");
			setGenre("");
			setLanguage("");
		  })
		  .catch((error) => console.log(error));
	  };

	


    return (
		<>
		<p> Add Book </p>
		<form onSubmit={handleSubmit}>

		<span>
		 <lable>Fiction</lable>
		 <label className="switch">
         <input type="checkbox" onChange={event => setFiction(event.target.value)}/>
         <span className="slider round"></span>
         </label>
		<lable>Non-Fiction</lable>
	     </span>

		<lable>Genre:</lable>
		<select name="genre" id="genre" onChange={e => setGenre(e.target.value)} >
		<option value=""></option>
        <option value="Action and adventure">Action and adventure</option>
        <option value="Coming-of-age">Coming-of-age</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Graphic novel">Graphic novel</option>
        <option value="Horror">Horror</option>
		<option value="Mystery">Mystery</option>
		<option value="Romance">Romance</option>
		<option value="Science fiction">Science fiction</option>
		<option value="Art/architecture">Art/architecture</option>
		<option value="Autobiography & Memoir">Autobiography & Memoir</option>
		<option value="History">History</option>
		<option value="Philosophy">Philosophy</option>
		<option value="Religion & spirituality">Religion & spirituality</option>
		<option value="True crime">True crime</option>
		<option value="Travel">Travel</option>
		<option value="Science">Science</option>
		<option value="Health/fitness">Health/fitness</option>
		 </select>

		 <lable>Language:</lable>
		 <select name='language' id='language' onChange={e => setLanguage(e.target.value)}>
		 <option value=""></option>
		 <option value="English">English</option>
		 <option value="French">French</option>
		 <option value="German">German</option>
		 <option value="Spanish">Spanish</option>
		 <option value="Mandarin">Mandarin</option>
		 <option value="Italian">Italian</option>
		 <option value="Cantonese">Cantonese</option>
		 <option value="Swedish">Swedish</option>

		 </select>
   
		<button type="submit"> Add this Book</button>

		</form>		
		</>

		// add OwnerID (hidden input?)
		// add description (text input)
		// tags!
	)
}





