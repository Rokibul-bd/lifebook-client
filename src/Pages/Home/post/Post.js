import React from 'react';
import Comments from '../../../Components/Comments/Comments';
import { useForm } from "react-hook-form";
const Post = ({ post }) => {
    const { handleSubmit, register } = useForm();
    const handleComment = data => {
        const { comment } = data;
        fetch('https://job-task-server-puce.vercel.app/comment', {
            method: 'Post',
            headers: {
                'content-type': 'applictaion/json'
            },
            body: JSON.stringify(comment)
        })
            .then(res => res.json())
            .then(data => { })
            .catch(err => console.error(err))
    }

    return (
        <div className="rounded p-8">
            <p className='text-xl font-semibold my-6'>{post.post}</p>
            <img className='my-2' src={post.image} alt="" />
            <div className='flex gap-4'>
                <div>
                    <button className='bg-sky-400 px-6 py-px rounded text-white'>Like</button>
                </div>
                <div>
                    <button className="bg-red-500 text-white px-4 py-px">Love</button>
                </div>
            </div>
            <form onSubmit={handleSubmit(handleComment)} className='my-4 flex gap-3'>
                <input {...register('comment')} type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                <button className='btn btn-primary'>Post</button>
            </form>
            <div className='w-96'>
                <Comments></Comments>
            </div>
        </div>
    );
};

export default Post;