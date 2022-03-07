import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AddBookPage from './pages/AddBookPage';
import BookInfoPage from './pages/BookInfoPage'
import SwapPage from './pages/SwapPage'
import BrowseAllPage from './pages/BrowseAllPage'
import SignUpPage from './pages/SignUpPage';
import Login from "./pages/LoginPage";





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/login" element={ <Login /> } />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/add-book' element={<AddBookPage />} />
        <Route path='/browse-all' element={<BrowseAllPage />} />
        <Route path='/book-info' element={<BookInfoPage />} />
        <Route path='/swap-book' element={<SwapPage />} />
      </Routes>
    </div>
  );
}

export default App;

// update book model
// create form to post backend
// display info on title and full 
// create auth & user model & sessions etc. 

// v quick v basic styling 
// add function to components 
// profit 



// figure out how to - 
// show different dropdown genres based on fiction/non-fiction toggle 
// make form submit open browse page 
