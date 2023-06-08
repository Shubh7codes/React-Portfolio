import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import {LuTwitter} from 'react-icons/lu'
import {BsInstagram} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
    
const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_526kzbm', 'template_xhc8cf3', form.current, '3HPl3yYvJQbJ2eOiJ')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    e.target.reset();
    alert('Message Sent!');
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail />
            <h4>Email</h4>
            <h5>shubh7codes@gmail.com</h5>
            <a href="mailto:shubh7codes@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <LuTwitter />
            <h4>Twitter</h4>
            <h5>Shubh7codes</h5>
            <a href="https://twitter.com/Shubh7Codes" target='_blank'>Follow!!!</a>
          </article>

          <article className="contact__option">
            <BsInstagram />
            <h4>Instagram</h4>
            <h5>shubh._.here_</h5>
            <a href="https://www.instagram.com/shubh._.here_/" target='_blank'>Follow!!!</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact