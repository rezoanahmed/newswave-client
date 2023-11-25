import { TextField } from "@mui/material";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";



const Login = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
    }
    return (

        <>
            <div className="p-4 md:p-16">
                <div></div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center max-w-md mx-auto gap-2">
                    <TextField name="email" id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField name="password" id="outlined-basic" label="Password" variant="outlined" required />
                    <button type="submit" className="bg-gunblack text-white p-2 rounded-md">Login</button>
                </form>
                <div className="flex flex-col justify-center max-w-md mx-auto items-center gap-2">
                    <div className="divider" >Other Login Options</div>
                    <div className="flex gap-2">
                        <button className="btn text-lg rounded-full"><FaGoogle></FaGoogle></button>
                        <button className="btn text-lg rounded-full"><FaFacebook></FaFacebook></button>
                        <button className="btn text-lg rounded-full"><FaTwitter></FaTwitter></button>
                    </div>
                        <p>Don't Have An Account? <Link to='/register' className="font-bold text-gunblack">Register Now!</Link></p>
                </div>


            </div>
        </>
    );
};

export default Login;