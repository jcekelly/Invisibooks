import './AddBook.css'
import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/auth'


const API_URL = "http://localhost:5005";


export default function AddBookForm(props) {
	const [fiction, setFiction] = useState(false)
	const [genre, setGenre] = useState('')
	const [language, setLanguage] = useState('')
	const [description, setDescription] = useState('')
	const [creator, setCreator] = useState('')

    const storedToken = localStorage.getItem('authToken')

	const { storeToken, verifyStoredToken, user } = useContext(AuthContext)
	console.log(user)

	const navigate = useNavigate()


	    
	const handleSubmit = e => {
		e.preventDefault()
		
		axios.post(`http://localhost:5005/api/books`, { fiction, genre, language, description}, { headers: { Authorization: `Bearer ${storedToken}` } })
		  .then((response) => {
	      console.log(response)
		  })
		  .catch((error) => console.log(error));
		  setFiction("");
		  setGenre("");
		  setLanguage("")
		  getAllBooks()
	  };

	  const getAllBooks = () => {
        axios
          .get(`${API_URL}/api/`, { headers: { Authorization: `Bearer ${storedToken}` } })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      };
	
       const routeChange = () => {
		   navigate('/browse-all')
	   }

    return (
		<>
		<p> Add Book </p>
		<form onSubmit={handleSubmit}>


		<div className='fiction-radio'>
		<label for="fiction"> Fiction</label>
		 <input type="radio" id="fiction" name="fiction" value={true} onChange={e => setFiction(e.target.value)} />
		 </div>
		 <div className='fiction-radio'>
		 <label for="non-fiction"> Non-Fiction</label>
		 <input type="radio" id="non-fiction" name="fiction" value={false} onChange={e => setFiction(e.target.value)} />
		 </div>


        

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
		 <option value="English">English</option>
		 <option value="French">French</option>
		 <option value="German">German</option>
		 <option value="Spanish">Spanish</option>
		 <option value="Italian">Italian</option>
		 <option value="Swedish">Swedish</option>

		 </select>

		 <lable> Why read this Book? </lable>
		 <input type='text' maxLength="50" onChange={e => setDescription(e.target.value)}/>
   
		<button type="submit" onClick={routeChange}> Add this Book</button>

		</form>		 
		</>

		// add OwnerID (hidden input?)
		// add description (text input)
		// tags!
	)
}





