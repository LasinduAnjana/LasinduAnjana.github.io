import React from 'react';
import './articleCard.css'
import {Link, Navigate} from "react-router-dom";

const ArticleCard = ({article}) => {
    function handleOnClick(event) {
        window.location.href = 'blog/article/' + article._id
    }

    return (
        <div className='article-card  m-3' onClick={handleOnClick}>
            <img className='articleCover' src="https://picsum.photos/seed/picsum/350/200" alt=""/>
            <div className="article">
                <h3 className='articleHeader'>{article.title}</h3>
                <p className='articleText d-none d-sm-block'>{article.article}</p>
            </div>
                <h5 className='author'>{article.author}</h5>
        </div>
    );
}

export default ArticleCard;