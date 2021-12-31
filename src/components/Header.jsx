import React from 'react';
import Cclogo from '../images/CClogo.svg';
import Videoicon from '../images/video-camera-front-gradient.svg';

function Header() {
    return (
        <div className="container-fluid sticky flex flex-row justify-between mx-auto px-4 sm:px-20">
            <div className='left-section'>
               <img src = {Cclogo} alt="logo" className='w-10.5 h-10.5 md-w-16 md-h-16' />
            </div>
            <div className='right-section flex flex-row justify-between items-center'>
                <img src={Videoicon} alt="" className='block sm:hidden' />
                 <p className='ml-4'>Sign in</p>
                 <button className='bg-signupbutton py-3 px-4 ml-4 sm:ml-8 rounded-lg text-white'>Sign up</button>
            </div>
        </div>
    )
}

export default Header
