import React from 'react';
import './articleCard.css'

const ArticleCard = ({article}) => {
    return (
        <div className='article-card m-3'>
            <img className='articleCover' src="https://picsum.photos/seed/picsum/350/200" alt=""/>
            <h3 className='articleHeader'>{article.title}</h3>
            <p className='articleText'>{article.articleText}</p>
            <h5 className='author'>{article.author}</h5>
        </div>
    );
}

export default ArticleCard;