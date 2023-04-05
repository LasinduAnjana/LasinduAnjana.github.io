import React, {Component} from 'react';
import Cookies from "universal-cookie";
import {Link, Navigate} from "react-router-dom";
const cookies = new Cookies()

const token = cookies.get("TOKEN")

const TopBar = () => {
    // render() {
    //     console.log(token)

        const logout = () => {
            // destroy the cookie
            cookies.remove("TOKEN", { path: "/blog" });
            window.location.href = "/blog";
        }


        if (token) {
            return (
                <section className='row'>
                    <div className='d-flex justify-content-between'>
                        <p>You Are logged in</p>
                        <Link to='/blog/addArticle'><button className='btn btn-outline-primary'>Add New Article</button> </Link>

                        <button type="submit" className="btn btn-outline-primary" onClick={() => logout()}>Log out
                        </button>
                    </div>
                </section>
            );
        } else {
            return (
                <section className='row'>
                    <div className='d-flex justify-content-between'>
                        <p>Log in to write articles</p>
                        {/*<button type="submit" className="btn btn-outline-primary" onClick={() => logout()}>Log out</button>*/}
                        <Link to='/blog/auth'>
                            <button className='btn btn-outline-primary'>Login</button>
                        </Link>
                    </div>
                </section>
            );
        }
    // }
}

export default TopBar;