import React, {Component} from 'react';
import {FaFacebook} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid justify-content-center p-5">
                <a href="#" className='text-light'>Lasindu Anjana</a>

                <div className="footer__socials">
                    <a className="m-2" href="https://facebook.com"><FaFacebook /></a>
                    <a className="m-2" href="https://instagram.com"><FiInstagram /></a>
                    <a className="m-2" href="https://twitter.com"><IoLogoTwitter /></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Lasindu Anjana. All rights reserved</small>
                </div>
            </footer>
        );
    }
}

export default Footer;