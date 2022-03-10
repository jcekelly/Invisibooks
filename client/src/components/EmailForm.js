import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth'; 
import axios from 'axios';


 export default function RequestBook () {
    const form = useRef();
    const {user} = useContext(AuthContext)   
    const { id } = useParams()
	const [book, setBook] = useState(null);
	const storedToken = localStorage.getItem('authToken')


	useEffect(() => {
		axios.get(`/api/${id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
              <input type="hidden" name="book_description" value={book.description} />
              <input type="hidden" name="to_email" value={book.creator.email}/>
              <input type="hidden" name="user" value={user.email} />
              <div className='emailBorder'>
              <h3> Hi! </h3>

<h4>I'm interested in the book you described as " {book.description} " </h4>

<h4> If it's still availble, please send me an email and we can discuss collecting it / or organise postage. My emai is:  {user.email} </h4>

<input type="text" name="message" placeholder='Add a note' />

<h3>Thanks!</h3>
</div>
              <input type="submit" value="Send Request to Owner" />

            </form>
            </>
          );
        };
      
        
    
  