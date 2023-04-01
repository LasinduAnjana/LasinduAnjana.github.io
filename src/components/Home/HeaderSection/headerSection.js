import React, {Component} from 'react';
import './headerSection.css'

import image from '../../../assets/20200306_160034-01.jpeg'
import CTA from "./CTA";
import HeaderSocials from "./headerSocials";

class HeaderSection extends Component {
    render() {
        return (
            <section className="headerSection row align-items-center">
                <div className="col-12 col-xl-3 col-lg-4 offset-xl-1 justify-content-center imageContainer">
                    <img src={image} alt="my image 1"/>
                </div>

                <div className="col-lg-6 introContainer">
                    <h5>Hello I'm a</h5>
                    <h1 className="text-primary">Fullstack Web Developer</h1>
                    {/*<button className="btn btn-primary-outline bg-light">Download CV</button>*/}
                    {/*<button className="btn btn-primary-outline bg-light">Talk to us</button>*/}
                    <CTA />
                    {/*<HeaderSocials />*/}
                </div>
                <div className="col-lg-1">
                    <div className="d-none d-lg-block">
                        <HeaderSocials />
                    </div>
                </div>
                <div className="col-lg-1"></div>
            </section>
        );
    }
}

export default HeaderSection;