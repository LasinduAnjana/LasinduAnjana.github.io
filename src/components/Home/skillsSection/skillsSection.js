import React, {Component} from 'react';
import {BsPatchCheckFill} from "react-icons/bs";
import './skillsSection.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


class SkillsSection extends Component {
    render() {
        return (
            <div className="row align-items-center">
                <h6 className="text-primary">what skills i have</h6>
                {/*<h2 className="text-primary">My Experiences</h2>*/}

                <Tabs>
                    <TabList>
                        <Tab>FrontEnd Dev</Tab>
                        <Tab>BackEnd Dev</Tab>
                        <Tab>Software & Mobile App Dev</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="skillsContainer p-3">
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">HTML</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">CSS</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">JavaScript</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Bootstrap</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">React</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Angular</h4>
                            </article>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="skillsContainer p-3">
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">NodeJS</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Express</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">MySQL</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">MongoDB</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Firebase</h4>
                            </article>
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="skillsContainer p-3">
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Java</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">JavaFX</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Python</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">Flutter</h4>
                            </article>
                            <article className='experience_details d-flex align-items-center'>
                                <BsPatchCheckFill className='m-2 experience_details-icon'/>
                                <h4 className="m-1 text-light">React Native</h4>
                            </article>
                        </div>

                    </TabPanel>
                </Tabs>


                {/*<div className="row justify-content-center">*/}
                {/*    <div className="col-lg-3 m-5 btn btn-outline-primary">*/}
                {/*        <h3>FrontEnd Development</h3>*/}
                {/*        <div className="skillsContainer p-3">*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">HTML</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">CSS</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">JavaScript</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Bootstrap</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">React</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Angular</h4>*/}
                {/*            </article>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-3 m-5 btn btn-outline-primary">*/}
                {/*        <h3>BackEnd Development</h3>*/}
                {/*        <div className="skillsContainer p-3">*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">NodeJS</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Express</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">MySQL</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">MongoDB</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Firebase</h4>*/}
                {/*            </article>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-3 m-5 btn btn-outline-primary">*/}
                {/*        <h3>Software Development</h3>*/}
                {/*        <div className="skillsContainer p-3">*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Java</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Java FX</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Python</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">Flutter</h4>*/}
                {/*            </article>*/}
                {/*            <article className='experience_details d-flex align-items-center'>*/}
                {/*                <BsPatchCheckFill className='experience_details-icon'/>*/}
                {/*                <h4 className="m-3 text-light">React native</h4>*/}
                {/*            </article>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default SkillsSection;