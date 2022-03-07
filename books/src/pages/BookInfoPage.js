import React from 'react'
import { Link } from 'react-router-dom';
import NavSideBar from '../components/NavSideBar'
import BookInfo from '../components/BookInfo';



export default function BookInfoPage() {
	return (
        <div>
        <NavSideBar />
        <BookInfo />
        </div>


	)
}