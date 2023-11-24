import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";

const AllArticles = () => {
    const [article, setArticle] = useState([]);
    useEffect(()=>{
        fetch("/posts.json")
        .then(res=>res.json())
        .then(data=>{
            setArticle(data);
        })
    },[])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-16">
                {article.map(element=><ArticleCard key={element.id} article={element}></ArticleCard>)}
            </div>
        </>
    );
};

export default AllArticles;