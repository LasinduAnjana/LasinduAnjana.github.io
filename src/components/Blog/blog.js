import React, {Component} from 'react';
import TopBar from "./TopBar/topBar";
import './blog.css'

class Blog extends Component {
    render() {
        return (
            <div className='blogContainer'>
                <TopBar />
            </div>
        );
    }
}

export default Blog;