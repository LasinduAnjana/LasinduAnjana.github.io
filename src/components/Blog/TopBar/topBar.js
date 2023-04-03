import React, {Component} from 'react';
import {Link} from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <section className='container'>
                <div className='d-flex justify-content-between'>
                    <p>Log in to Post new articles</p>
                    <Link to='/blog/auth'><button className='btn btn-outline-primary'>Login</button> </Link>
                </div>
            </section>
        );
    }
}

export default TopBar;