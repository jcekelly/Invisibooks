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
import Protected from './components/ProtectedPage';
import YourBooks from './components/YourBooks';





function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path='/signup' element={ <SignUpPage />} />
        <Route path='/add-book' element={<Protected> <AddBookPage /> </Protected>} />
        <Route path='/browse-all' element={<Protected> <BrowseAllPage /> </Protected>} />
        <Route path='/your-books' element={<Protected> <YourBooks /> </Protected>} />
        <Route path='/books/:id' element={<Protected> <SwapPage /> </Protected>} />
      </Routes>
    </div>
  );
}

export default App;






// style both forms nicely 


// make form submit open browse page 
// page refresh when deleted 
// fix book tiles text 
// add key props to list 

// filters for browse page ? 