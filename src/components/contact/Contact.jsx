import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useContext } from 'react'
import { ThemeContext } from '../../context'

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
                    <h1 className='c-title'>Contact Me</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img
                                src={Phone}
                                alt=''
                                className='c-icon'
                            />
                            (+91) 95106 79933
                        </div>
                        <div className='c-info-item'>
                            <img
                                src={Email}
                                alt=''
                                className='c-icon'
                            />
                            bhalalajenil47@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img
                                src={Address}
                                alt=''
                                className='c-icon-address'
                            />
                            <p className='c-address'>40, Amipark Society, Kargil Chowk, Punagam, Surat, Gujarat, India.</p>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder='Name' name="user_name" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder='Subject' name="user_subject" />
                        <input style={{ backgroundColor: darkMode && "#333" }} type='email' placeholder='Email' name="user_email" />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you for contact me!"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact