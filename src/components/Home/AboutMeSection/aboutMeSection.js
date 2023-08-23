import React, {Component} from 'react';
import "./aboutMeSection.css"
import image from "../../../assets/photo_2023-08-23_19-33-15.jpg";
import SkillsSection from "../skillsSection/skillsSection";

class AboutMeSection extends Component {
    render() {
        return (
            <section className="container-fluid mt-3">
                <h6>Get to Know</h6>
                <h2 className="text-primary">About Me</h2>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-1 aboutContent">
                        <div className="row p-3 justify-content-center">
                            <p>I'm 23 years old Web developer and software engineer. Have a passion for Programming and Cyber Security. i'm hard working person always trying to update with technology. i'm a fast learner and focused developer. Always deliver projects on time. Can also develop mobile application for android and ios using Flutter and react native. </p>
                            <p>Studied at G/P. De. S. Kularathna collage. B.Sc under graduate at University of peradeniya following Computer and physics as major subject areas. Following ICET Certified Master (ICM) Course at ICET institute.</p>
                            <SkillsSection />
                        </div>
                    </div>
                    <div className="col-lg-5 aboutImageContainer">
                        <img src={image} alt="my image 2"/>
                    </div>

                </div>

            </section>
        );
    }
}

export default AboutMeSection;