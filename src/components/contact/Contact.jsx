import React from 'react'
import "./contact.scss"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_u3n1i05', 'template_7rgrm8h', form.current, 'QoVkOesjdTKLsQqFz')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className='contact'>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <div className="contact__option">
              <MdOutlineEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>jaidnis30@gmail.com</h5>
              <a href="mailto:jaidnis30@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
            </div>

            <div className="contact__option">
              <BsWhatsapp className='contact__option-icon' />
              <h4>WhatsApp</h4>
              <h5>+91 8709590091</h5>
              <a href="https://wa.me/+918709590091" target="_blank" rel="noopener noreferrer">Send a message</a>
            </div>

          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}
