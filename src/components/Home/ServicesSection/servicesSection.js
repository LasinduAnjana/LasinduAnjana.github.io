import React, {Component} from 'react';
import {BsPatchCheckFill} from "react-icons/bs";
import './servicesSection.css'

class ServicesSection extends Component {
    render() {
        return (
            <section className="row">
                <h6>What I offer</h6>
                <h2 className="text-primary">Services</h2>

                <div className="row justify-content-center">
                    <div className="col-lg-3 p-1 m-5">
                        <h3 className="serviceTitle">web Development</h3>
                        <div className="p-3">
                            <article className='d-flex justify-content-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Static web Page Development using HTML, CSS, JavaScript</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Front End web Development using React</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Front End web Development using Angular</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>BackEnd Web Development Using NodeJS</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Full Stack Web Development using mern Stack.</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Full Stack Web Development using mean Stack.</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Web Hosting</p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-3 p-1 m-5">
                        <h3 className="serviceTitle">UI/UX Development</h3>
                        <div className="p-3">
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Responsive Design</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>create prototype form adobe xd</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>UI/UX Design for web applications</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>UI/UX Design for mobile applications</p>
                            </article>
                        </div>
                    </div>
                    <div className="col-lg-3 p-1 m-5">
                        <h3 className="serviceTitle">Software Development</h3>
                        <div className="p-3">
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Java Desktop applications with gui</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>python Desktop applications</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>python automation projects</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Telegram chatbots devlopment</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Mobile applications using flutter</p>
                            </article>
                            <article className='d-flex align-items-start'>
                                <BsPatchCheckFill className='experience_details-icon m-2'/>
                                <p>Mobile applications using React native</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesSection;