import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import useAxiosPublic from "../../hooks/useAxios";

const AllArticles = () => {
    const [article, setArticle] = useState([]);
    // useEffect(()=>{
    //     fetch("/posts.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setArticle(data);
    //     })
    // },[])
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get("/articles?status=approved")
            .then(data => {
                setArticle(data.data);
            })
    }, [])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-16">
                {article.map(element => <ArticleCard key={element.id} articles={element}></ArticleCard>)}
            </div>
        </>
    );
};

export default AllArticles;