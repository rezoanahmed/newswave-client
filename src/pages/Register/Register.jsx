import { TextField } from "@mui/material";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";



const Register = () => {
    const {registerUser, googleLogin} = useAuth();
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const name = form.name.value;
    //     const image = form.image.value;
    //     console.log({ email, password,name,image });
    // }

    const {register, onSubmit, handleSubmit } = useForm();
    // user registration
    const handleUserRegistration = async(data)=>{
        const email = data.email;
        const name = data.name;
        const password = data.password;
        const image = data.image[0];
        const imageFile = {image}
        console.log({email, name, password, image});
        console.log(imageFile);

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
                <form onSubmit={handleSubmit(handleUserRegistration)} className="flex flex-col justify-center max-w-md mx-auto gap-2">
                    <TextField {...register("name")} name="name" id="outlined-basic" label="Name" variant="outlined" required />
                    <TextField {...register("email")} name="email" type="email" id="outlined-basic" label="Email" variant="outlined" required />
                    <TextField {...register("password")} name="password" id="outlined-basic" label="Password" variant="outlined" type="password" required />
                    <input {...register("image")} name="image" type="file" className="file-input file-input-bordered file-input-gunblack w-full" />
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