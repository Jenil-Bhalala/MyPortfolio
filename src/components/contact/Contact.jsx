import './contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { ThemeContext } from '../../context'
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ofool0o', 'template_bul4hgm', formRef.current, '92aFZgRt0rg7ez2TF').then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='c' id='contact'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Get In Touch</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <FaPhone className='c-icon-phone'></FaPhone>
                            (+91) 95106 79933
                        </div>
                        <div className='c-info-item'>
                            <FaEnvelope className='c-icon-email'></FaEnvelope>
                            bhalalajenil47@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <FaHome className='c-icon-address'></FaHome>
                            <p className='c-address'>40, Amipark Society, Kargil Chowk, Punagam, Surat, Gujarat, India.</p>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder='Name' name="user_name" required/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder='Subject' name="user_subject" required/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type='email' placeholder='Email' name="user_email" required/>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" required/>
                        <button>Submit</button>
                        {done && "Thank you for contact me!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact