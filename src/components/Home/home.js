import React, {Component} from 'react';
import './home.css'
import HeaderSection from "./HeaderSection/headerSection";
import AboutMeSection from "./AboutMeSection/aboutMeSection";
import ServicesSection from "./ServicesSection/servicesSection";
import ProjectsSection from "./ProjectsSection/projectsSection";
import ContactSection from "./ContactSection/contactSection";

class Home extends Component {
    render() {
        return (
            <>
                <HeaderSection />
                <AboutMeSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
            </>
        );
    }
}

export default Home;