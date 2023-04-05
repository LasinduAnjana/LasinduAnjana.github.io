import React, {useState, useEffect} from 'react';
import './blog.css'
import axios from "axios";
import TopBar from "./Topbar/topBar";
import Cookies from "universal-cookie";
import ArticleCard from "./ArticleCard/articleCard";
const cookies = new Cookies()

const token = cookies.get("TOKEN")

const Blog = () => {
    const [articles, setArticles] = useState(null);
    console.log(articles)

    useEffect(() => {
        const configuration = {
           method: "get",
           url: "http://localhost:8080/blog"
       }

       axios(configuration)
           .then((result) => {
               // console.log(result.data.articles)
               setArticles(result.data.articles)
           })
           .catch((err) => {
               err = new Error()
           })
    }, []);


    return (
        <div className='blogContainer'>
           <TopBar />
            <div className="articleContainer">
                {
                    articles ? (articles.map((article) => {
                        return <ArticleCard key={article._id} article={article} />
                    })) : "Loading..."
                }
            </div>
        </div>
    );
}

export default Blog;