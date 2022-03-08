import React from 'react'
import NavSideBar from '../components/NavSideBar'
import AllBooksList from '../components/AllBooksList';



export default function BrowseAllPage() {
	return (
        <div className='booklist'>
        <NavSideBar />
		<AllBooksList />
        </div>
	)
}