import { TextField } from "@mui/material";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const Register = () => {
    const {register, googleLogin} = useAuth();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const image = form.image.value;
        console.log({ email, password,name,image });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(userCredentials => {
                console.log(userCredentials);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (

        <>
            <div className="p-4 md:p-16">
                <div></div>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center max-w-md mx-auto gap-2">
                    <TextField name="name" id="outlined-basic" label="Name" variant="outlined" required />
                    <TextField name="email" id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField name="password" id="outlined-basic" label="Password" variant="outlined" required />
                    <input name="image" type="file" className="file-input file-input-bordered file-input-gunblack w-full" />
                    <button type="submit" className="bg-gunblack text-white p-2 rounded-md">Register</button>
                </form>
                <div className="flex flex-col justify-center max-w-md mx-auto items-center gap-2">
                    <div className="divider" >Other Login Options</div>
                    <div className="flex gap-2">
                        <button onClick={handleGoogleLogin} className="btn text-lg rounded-full"><FaGoogle></FaGoogle></button>
                        <button className="btn text-lg rounded-full"><FaFacebook></FaFacebook></button>
                        <button className="btn text-lg rounded-full"><FaTwitter></FaTwitter></button>
                    </div>
                    <p>Already Registered? <Link to='/login' className="font-bold text-gunblack">Login Now!</Link></p>
                </div>


            </div>
        </>
    );
};

export default Register;