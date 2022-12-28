import React from 'react';
import img from '../../images/routesNotFound.jpg'

const NotFoundRoute = () => {
    return (
        <div className='flex justify-center items-center my-24'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFoundRoute;