import React, {Component} from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import './contactSection.css'

class ContactSection extends Component {
    render() {
        return (
            <section className="row" id='contact'>
                <h6>Get in Touch</h6>
                <h2 className="text-primary">Contact Me</h2>

                <div className="row align-content-center">
                    <div className="contactOptions col-xl-3 col-md-5 offset-xl-2 p-5">
                        <article className='contact__option'>
                            <MdOutlineEmail className='contact__option-icon'/>
                            <h4>Email</h4>
                            <h6>lasindua@gmail.com</h6>
                            <a href="mailto:lasindua@gmail.com">Send a message</a>
                        </article>
                        <article className='contact__option'>
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Massenger</h4>
                            <h6>lasindu Anjana Karunarathna</h6>
                            <a href="https://m.me/lasindu.anjana.1" target="_blank">Send a message</a>
                        </article>
                        <article className='contact__option'>
                            <BsWhatsapp className='contact__option-icon' />
                            <h4>Whatsapp</h4>
                            <h6>Lasindu</h6>
                            <a href="https://api.whatsapp.com/send?phone=+94771999721" target="_blank">Send a message</a>
                        </article>
                    </div>

                    <form className="col-xl-5 col-md-7 p-5" action='src/components/Home/ContactSection'>
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="text" name='email' placeholder='your email' required />
                        <textarea name="message" rows="7" placeholder='your message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send message</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ContactSection;