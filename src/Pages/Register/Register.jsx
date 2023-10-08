
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const {CreateUser}=useContext(AuthContext)





    const handleRegister=e=>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form= new FormData(e.currentTarget);
        // console.log(form);
        // console.log(form.get('password'))
        const email = form.get('email');
        const password = form.get('password');
        const Name = form.get('name');
        const URL = form.get('url');

        console.log(Name,email, password, URL);

        CreateUser(email,password)
        .then(result=>{
            console.log(result.user)
        } )
        .catch(error=>console.error(error))


        // old system
        // const email  =e.target.email.value;
        // const password = e.target.password.value;

        // console.log(email,password);
    }
    return (
        <div>
            <Navbar></Navbar>



            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col   flex">

                    <form className="card-body" onSubmit={handleRegister}>
                        <h2 className="text-center font-bold text-2xl border-b-2 p-4">Register your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" required name="name" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" required name="URL" />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p>Already Have An Account ? 
                        <Link to={"/login"} className="text-[#e97474] border-b-2"> Login</Link>
                    </p>
                    

                </div>
            </div>
        </div>
    );
};

export default Register;