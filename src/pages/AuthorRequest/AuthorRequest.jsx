import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const AuthorRequest = () => {
    const {user:firebaseUser} = useAuth();
    const [user, setUser] = useState();
    const axiosPublic = useAxiosPublic();
    useEffect(() => {
        axiosPublic.get(`/user/${firebaseUser?.email}`)
            .then(data => {
                setUser(data.data)
            })
        }, [axiosPublic,firebaseUser,user])

    return (
        <div className="flex flex-col gap-5 justify-center items-center mt-24 h-[50vh]">
            <h1 className="md:text-4xl font-bold">After the admin approval, You can post your articles</h1>
            <div className="divider p-4 m-4">Your Info</div>
            <div>
                <p>ID: {user?._id}</p>
                <p>Name: {user?.name}</p>
                <p className="capitalize">User Type: {user?.account_type}</p>
            </div>
            <div className="divider p-4 m-4">Request to become an author</div>
            <button className="btn bg-gunblack text-white hover:bg-black" onClick={()=>handleRequest()}>Request to become an author</button>
        </div>
    );
};

export default AuthorRequest;