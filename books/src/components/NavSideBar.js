import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function NavSideBar() {


    return (
        <>
        <p>Nav Bar</p>
		<nav>
        <Link to='/browse-all'> Browse all</Link>
        <Link to='/add-book'> Add Book</Link>
        <Link to='/swap-book'> Your Swaps</Link>
        </nav>
        </>

	)
}