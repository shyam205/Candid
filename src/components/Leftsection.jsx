import React from 'react';
import Network from '../images/Networking_perspective_matte_s.svg';
import Plus from '../images/Plus_perspective_matte_s.svg';
import User from '../images/User_perspective_matte_s.svg';
import {  useLocation,Link } from 'react-router-dom';


function Leftsection() {
    let { pathname : path } = useLocation();
    console.log(path)
    return (
        <div className='hidden md:block flex flex-col w-30 mt-24'>
            <div className={`flex flex-col items-center justify-start ${path === '/' ? 'active': ''}`}>
            <Link to="/"><img src={Plus} alt="" /></Link>
            
             <p className='text-lg'>New Thought</p>
            </div>
            <div className={`flex flex-col items-center justify-start mt-8 ${path === '/community' ? 'active': ''}`}>
            <Link to="/community"><img src={Network} alt="" /></Link>
            <p className='text-lg'>Community</p>
            </div>
            <div className={`flex flex-col items-center justify-start mt-8 ${path === '/profile' ? 'active': ''}`}>
            <Link to="/profile"><img src={User} alt="" /></Link>
            <p className='text-lg'>Profile</p>
            </div>
        </div>
    )
}

export default Leftsection
