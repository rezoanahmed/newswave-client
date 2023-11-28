import { useEffect } from "react";
import { useState } from "react";
import ArticleCard from "./ArticleCard";
import useAxiosPublic from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const AllArticlesHome = () => {
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
    // console.log(article);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 md:p-16">
                {article.slice(0,6).map(element => <ArticleCard key={element.id} articles={element}></ArticleCard>)}
            </div>
            <div className="flex justify-center items-center">
            <Link to='/all' className="px-4 py-2 bg-gunblack btn text-white hover:bg-opacity-70 hover:text-black">See All Articles</Link>
            </div>
        </>
    );
};

export default AllArticlesHome;