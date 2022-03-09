import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from './../context/auth'; 
import axios from 'axios';

 export default function RequestBook () {
    const form = useRef();
    const {user} = useContext(AuthContext)   
    const { id } = useParams()
	const [book, setBook] = useState(null);
	const storedToken = localStorage.getItem('authToken')


	useEffect(() => {
		axios.get(`http://localhost:5005/api/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response)
				setBook(response.data)
			})
			.catch(err => console.log(err))
	}, [])

    console.log('user', user)


   if(book) {
    console.log('book', book.creator.email)
    }


      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_x8bhezh', 'template_rls4rlh', form.current, 'Gm9BCB7A6UBJVt11e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };

        return book && (
            <>
            <form ref={form} onSubmit={sendEmail}>
              <label>book_description</label>
              <input type="hidden" name="book_description" value={book.description} />
              <label>to_email</label>
              <input type="hidden" name="to_email" value={book.creator.email}/>
              <label>user email</label>
              <input type="hidden" name="user" value={user.email} />
              <input type="submit" value="Send" />
            </form>
            </>
          );
        };
      
        
    
  