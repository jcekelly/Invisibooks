import React from 'react'
import NavSideBar from '../components/NavSideBar'
import SwapCard from '../components/SwapCard'
import RequestBook from '../components/EmailForm'


export default function SwapPage() {
	return (
		<>
		 <NavSideBar />
		<div className='requestPage'>
		<SwapCard />
		<RequestBook />
		</div>
		</>
		

	)
}