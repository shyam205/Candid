import React from 'react'
import Network from '../images/Networking_perspective_matte_s.svg';
import Plus from '../images/Plus_perspective_matte_s.svg';
import User from '../images/User_perspective_matte_s.svg';
import { Link } from 'react-router-dom';

function Bottomlogo() {
    return (
        <div className='block sm:hidden w-full flex flex-row justify-around fixed bottom-0 left-0 bg-white'>
            <Link to="/community" className='p-1'><img src={Network} alt="" /></Link>
            <Link to="/" className='p-1'><img src={Plus} alt="" /></Link>
            <Link to="/profile" className='p-1'><img src={User} alt="" /></Link>
        </div>
    )
}

export default Bottomlogo;
