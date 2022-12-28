import React, { useState } from 'react';
import { PickerOverlay } from 'filestack-react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


const Header = () => {
    const [isPicker, setIsPicker] = useState(false);
    const [image, setImage] = useState("");
    const { handleSubmit, register } = useForm();
    const handlePosts = data => {
        const { post } = data
        const posts = {
            post,
            image
        }
        console.log(posts)
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Posted complited');

            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit={handleSubmit(handlePosts)} className='flex justify-center container mx-auto  my-40'>
            <div className='w-[50%] shadow-lg p-16'>
                <textarea {...register('post')} name='post' className="textarea textarea-success w-full" placeholder="Type What's your mind" required></textarea> <br />
                <span type="button" className='file-input w-full max-w-xs border-2 border-dotted border-slate-700 mt-4 p-2' onClick={() => isPicker ? setIsPicker(false) : setIsPicker(true)}>choose your photo</span> <br />
                {
                    image && <div className='w-full border-2 border-dashed h-52 relative mt-4'>
                        {
                            image && <img className='w-full h-52 object-cover' src={image} alt="Avatar" />
                        }
                    </div>
                }
                <button type='submit' className='btn btn-primary px-6 my-4 w-36'>Post</button>
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
        </form>
    );
};

export default Header;