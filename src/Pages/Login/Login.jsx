import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const {signIn}=useContext(AuthContext);

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form= new FormData(e.currentTarget);
        // console.log(form);
        // console.log(form.get('password'))
        const email = form.get('email');
        const password=form.get('password');

        signIn(email, password);


        // old system
        // const email  =e.target.email.value;
        // const password = e.target.password.value;

        // console.log(email,password);
    }
    return (
        <div>
            <Navbar></Navbar>



            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col ">

                    <form className="card-body" onSubmit={handleLogin}>
                        <h2 className="text-center font-bold text-2xl border-b-2 p-4">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" className="input input-bordered" required name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your password" className="input input-bordered " required name="password" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p>Dont’t Have An Account ? 
                        <Link to={"/register"} className="text-[#e97474] border-b-2"> Register</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;