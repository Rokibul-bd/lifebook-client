import React from 'react';
import { useQuery } from '@tanstack/react-query';

const About = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://job-task-server-puce.vercel.app/user')
            const data = res.json()
            return data
        }
    })


    return (
        <div className='h-screen'>
            <h3 className='text-center font-semibold text-xl my-16'>About</h3>
            <div className='flex justify-center items-center'>
                <div className='bg-slate-100 shadow-md p-12'>
                    <p>Name</p>
                    <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" /> <br></br>
                    <p>Email</p>
                    <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" /> <br></br>
                    <p>Address</p>
                    <input type="text" placeholder="Address" className="input input-bordered input-info w-full max-w-xs" /> <br></br>
                    <p>University</p>
                    <input type="text" placeholder="University" className="input input-bordered input-info w-full max-w-xs" /> <br></br>
                </div>
            </div>
        </div>
    );
};

export default About;