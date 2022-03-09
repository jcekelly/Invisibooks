import { useState } from 'react';
import { send } from 'emailjs-com';

function Email() {



    const [toSend, setToSend] = useState({
        ToEmail: '',
        FromEmail:'',
        message: '',
        
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_x8bhezh',
          'template_bui4j34',
          toSend,
          'Gm9BCB7A6UBJVt11e'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    




  return (
    <div className="Email">
      <form onSubmit={onSubmit}>
  <input
    type='text'
    name='FromEmail'
    placeholder='FromEmail'
    value={toSend.FromEmail}
    onChange={handleChange}
  />
  <input
    type='text'
    name='ToEmail'
    placeholder='ToEmail'
    value={toSend.ToEmail}
    onChange={handleChange}
  />
  <input
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />
 
  <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Email;