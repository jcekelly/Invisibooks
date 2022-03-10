import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = "https://invisibooks.herokuapp.com/";


export default function Signup() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [swapRequests, setSwapRequests] = useState([])
    const [swapsRequested, setSwapsRequested] = useState([])

	const navigate = useNavigate()

	const handleSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password, swapRequests, swapsRequested }
		axios.post(`${API_URL}auth/signup`, requestBody)
			.then(response => {
				// redirect to login
				navigate('/login')
                console.log(response)
			})
			.catch(err => {
				const errorDescription = err.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)
	const [errorMessage, setErrorMessage] = useState(undefined);

	return (
		<>
			<h1>Signup</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email: </label>
				<input type="text" value={email} onChange={handleEmail} />
				<label htmlFor="password">Password: </label>
				<input type="password" value={password} onChange={handlePassword} />
				<button type="submit">Sign Up</button>
			</form>

			{errorMessage && <h5>{errorMessage}</h5>}

			<h3>Already have an account?</h3>
			<Link to='/login'>Login</Link>
		</>
	)
}