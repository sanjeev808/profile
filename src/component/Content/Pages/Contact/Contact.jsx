import React from 'react'
import './Contact.css'
import { NavLink } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
export default function Contact() {
    return (
        <div>
            <div className='contact-heading '>
                <h2>Contact Us</h2>
            </div>
            <div>
                <hr />
            </div>
            <div className='d-flex justify-content-between contact'>
                <div style={{
                        marginTop:77
                }}>
                    <h1>Contact Info</h1>
                <NavLink to='https://mail.google.com/' target='_blank'>
                    <div className='contact-mail'><EmailIcon className='color' /><span>mauryasanjeev808@gmail.com</span></div>
                    </NavLink>
                    <div className='contact-mail'><LocalPhoneIcon className='color' /><span>7009711037</span></div>
                    <div className='contact-mail'><LocalPhoneIcon className='color' /><span>7355248988</span></div>
                    <div className='contact-mail'><LocationOnIcon className='color' /><span>Ludhiana, India </span></div>
                </div>

                <div className='form'>
                    <form action="">
                    <div>
                    <input type="text" id='name ' placeholder='Full Name' />
                    </div>
                    <div>
                        <input type="email" id='Email' placeholder='Email Address' />
                    </div>
                    <div>
                    <input type="text" id='text ' placeholder='Project Name' />
                    </div>
                    <div><textarea name="text" id="text" cols="30" rows="10" placeholder='Enter Your Project Detail...'></textarea></div>
                    
                    <div><button className='sendBtn'>Send  <SendIcon className='sendicon'/></button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
