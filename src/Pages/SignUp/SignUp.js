import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { PickerOverlay } from 'filestack-react';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import { toast } from 'react-toastify';
const SignUp = () => {
    const [isPicker, setIsPicker] = useState(false);
    const [image, setImage] = useState("");
    const { handleSubmit, register } = useForm();
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = data => {
        const { name, email, password } = data;
        createUser(email, password)
            .then(res => { })
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    saveUser(name, email)
                    toast.success('Succesfuly User Created')
                    navigate('/')
                }
            })
            .catch(err => console.log(err))

    }

    const saveUser = (name, email) => {
        const userInfo = {
            name,
            email,
            image
        }
        fetch('https://job-task-server-puce.vercel.app/createUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleSignUp)} className="hero min-h-screen bg-base-200 px-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h4 className='text-center text-xl font-semibold'>Sign Up</h4>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register('password')} type="text" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full max-w-xs">

                                <div className='w-full border-2 border-dashed h-52 relative mt-4'>
                                    {
                                        image ? <img className='w-full h-52 object-cover' src={image} alt="Avatar" /> : <button onClick={() => isPicker ? setIsPicker(false) : setIsPicker(true)} className='btn'>Choose your Photo</button>
                                    }
                                </div>
                            </div>
                            <label className="label">
                                <small>Already an account please <Link to="/login" className="label-text-alt link link-hover text-yellow-600">Log in</Link></small>
                            </label>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            {
                                isPicker ? <PickerOverlay
                                    apikey={"AvRU6xk61Ro2kfTwA3CALz"}
                                    onSuccess={(res) => {
                                        console.log(res)
                                        setImage(res.filesUploaded[0].url)
                                        console.log(res.filesUploaded[0].url)
                                        setIsPicker(false)
                                    }}
                                    onUploadDone={(res) => console.log(res)}
                                /> : <div></div>
                            }
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;