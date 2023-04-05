import logo from './logo.svg';
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Blog from "./components/Blog/blog";
import Authpage from "./components/Blog/Auth/authpage";
import AddNewArticle from "./components/Blog/addNewArticle/addNewArticle";
import ProtectedRoutes from "./ProtectedRoutes";
import ArticleContainer from "./components/Blog/ArticlePage/articleContainer";


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
                <Route path='/blog/article/:_id' element={<ArticleContainer />}/>
            </Routes>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
