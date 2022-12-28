import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const LogIn = () => {
    const { logInUser } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const handleLogin = data => {
        const { email, password } = data
        logInUser(email, password)
            .then(res => { res.json() })
            .then(data => {
                navigate('/')
            })
            .catch(err => console.log(err))

    }


    return (
        <form onSubmit={handleSubmit(handleLogin)} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className='text-center text-xl font-semibold'>Log In</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email')} name="email" type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' {...register('password')} type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <small>You have new to website please <Link to="/signup" className="label-text-alt link link-hover">Sign Up</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LogIn;