import React from 'react'
import AddBookForm from '../components/AddBookForm';
import NavSideBar from '../components/NavSideBar'



export default function AddBookPage() {
	console.log('add book')
	return (
        <div>
		<NavSideBar />
		<AddBookForm />
        </div>
	)
}