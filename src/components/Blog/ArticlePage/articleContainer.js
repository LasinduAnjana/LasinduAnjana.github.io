import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
const nl2br = require('react-nl2br');

const ArticleContainer = () => {
    const [article, setArticle] = useState(null);
    const params = useParams();

    useEffect(() => {
        axios.get('http://localhost:8080/blog/findOne', {
            params: {
                _id: params._id
            }
        })
            .then((result) => {
                // console.log(result.data.articles)
                setArticle(result.data)
            })
            .catch((err) => {
                err = new Error()
            })
    }, []);


        return (
            <div className='container'>
                <h1>{article ? article.title : "Loading..."}</h1>
                <hr/>
                <p>{article && nl2br(article.article)}</p>
                <hr />
                <p>{article && "written by : " +article.author}</p>

            </div>
        );
}

export default ArticleContainer;