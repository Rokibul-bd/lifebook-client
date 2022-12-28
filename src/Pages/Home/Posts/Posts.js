import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Post from '../post/Post';


const Posts = () => {

    const { data: posts = [] } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/post')
            const data = res.json()
            return data
        }
    })
    return (
        <div className='container mx-auto flex justify-center items-center my-16'>
            {
                posts.map(post => <Post key={post._id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;