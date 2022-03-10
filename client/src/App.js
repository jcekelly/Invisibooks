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







// deploy !!!!!!! !!!! !!!!!


// style both forms nicely 

// style nav, buttons 

// style book cards 

// filters ? 

// think of a name? 








