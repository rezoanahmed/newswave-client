import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxios";

const AuthorHome = () => {
    const { user } = useAuth();
    const [article, setArticle] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/myarticles?email=${user.email}`)
    .then(data=>{
        setArticle(data.data);
    })
    return (
        <div>
            <div className="flex justify-between">
                <h1 className="text-4xl font-bold">Author : {user.displayName}</h1>
                <h1 className="text-4xl font-bold">Total Article Posted : {article.length}</h1>

            </div>
        </div>
    );
};

export default AuthorHome;