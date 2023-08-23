import React, {Component} from 'react';
import './navBar.css';
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div className="navbarContainer container">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                            <h1 className="navbar_brand" href="#">Lasindu Anjana</h1>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        <div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        {/*<a className="nav-link active" aria-current="page" href="/">Portfolio</a>*/}
                                        <Link className='nav-link' to='/'>Portfolio</Link>
                                    </li>

                                    <li className="nav-item">
                                        {/*<a className="nav-link" href="/blog">Blog</a>*/}
                                        <Link className='nav-link' to='#Blog'>Blog(WIP)</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Project Request &gt</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;