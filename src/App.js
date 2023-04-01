import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderSection from "./components/Home/HeaderSection/headerSection";
import AboutMeSection from "./components/Home/AboutMeSection/aboutMeSection";
import ServicesSection from "./components/Home/ServicesSection/servicesSection";
import ProjectsSection from "./components/Home/ProjectsSection/projectsSection";
import ContactSection from "./components/Home/ContactSection/contactSection";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";


function App() {
  return (
    <div className="App container-fluid">
        <NavBar />
        {/*<HeaderSection />*/}
        {/*<AboutMeSection />*/}
        {/*<ServicesSection />*/}
        {/*<ProjectsSection />*/}
        {/*<ContactSection />*/}
        <Home />
        <Footer />
    </div>
  );
}

export default App;
