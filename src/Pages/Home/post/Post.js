import React from 'react';
import Comments from '../../../Components/Comments/Comments';

const Post = ({ post }) => {

    return (
        <div className="rounded p-8">
            <h3 className='text-xl font-semibold'>Md Rokibul Islam Cmt</h3>
            <p>{post.post}</p>
            <img className='my-2' src={post.image} alt="" />
            <div className='flex gap-4'>
                <div>
                    <button className='bg-sky-400 px-6 py-px rounded text-white'>Like</button>
                </div>
                <div>
                    <button className="bg-red-500 text-white px-4 py-px">Love</button>
                </div>
            </div>
            <div className='my-4 flex gap-3'>
                <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                <button className='btn btn-primary'>Post</button>
            </div>
            <div className='w-96'>
                <Comments></Comments>
            </div>
        </div>
    );
};

export default Post;