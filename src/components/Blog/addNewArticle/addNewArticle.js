import React, {useState, useEffect} from 'react';
import axios from "axios";
import './addNewArticle.css'

import Cookies from "universal-cookie";
const cookies = new Cookies();

const token = cookies.get("TOKEN");


const AddNewArticle = () => {
    const [articleText, setArticleText] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        const configuration = {
            method: 'post',
            url: 'http://localhost:8080/blog/addArticle',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                author: author,
                title: title,
                articleText: articleText
            }
        }

        axios(configuration)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                error = new Error();
            });

        window.location.href = "/blog";

    }


    return (
        <div className="newArticleContainer">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author-name">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author-name"
                        placeholder="Enter your name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title of Article</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Article title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="input-group mt-3">
                    <label htmlFor="articleText" className='p-2'>Write your article here</label>
                    <textarea
                        // className="form-control"
                        aria-label="With textarea"
                        rows='20'
                        value={articleText}
                        onChange={(e) => setArticleText(e.target.value)}
                    />
                </div>
                <div>
                    <input type='submit' className='btn btn-primary'/>
                </div>
            </form>
        </div>
    );
}

export default AddNewArticle;