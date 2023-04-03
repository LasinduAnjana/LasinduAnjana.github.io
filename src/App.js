import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import HeaderSection from "./components/Home/HeaderSection/headerSection";
// import AboutMeSection from "./components/Home/AboutMeSection/aboutMeSection";
// import ServicesSection from "./components/Home/ServicesSection/servicesSection";
// import ProjectsSection from "./components/Home/ProjectsSection/projectsSection";
// import ContactSection from "./components/Home/ContactSection/contactSection";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./components/Blog/blog";
import Authpage from "./components/Blog/Auth/authpage";
import AddNewArticle from "./components/Blog/addNewArticle/addNewArticle";
import ProtectedRoutes from "./ProtectedRoutes";


function App() {
  return (
    <div className="App container-fluid">
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog/auth' element={<Authpage />} />
                <Route path='blog/addArticle' element={<ProtectedRoutes><AddNewArticle /></ProtectedRoutes>} />

            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
