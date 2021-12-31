import React from 'react';
import Bevrage from '../images/undraw_refreshing_beverage_td3r 1.svg';
import Icanfly from '../images/undraw_i_can_fly_-7-egl 1.svg';
import Primarybtn from './Primarybtn';

function Rightsection() {
    const btndesc = {
        btntext: 'Video data'
      };
    return (
        <div className='box-border mt-4 sm:mt-20'>
            <div className='block bg-white rounded-md p-4 sm:p-8 mt-4'>
            <div className='flex flex-row'>
                <img src={Bevrage} alt="" />
                <div>
                <a className='ml-1 text-sm'><span className='font-medium'>Myra</span><br></br>@admin</a>
                <div className='box-border block sm:hidden text-exs'>
                    <p className='underline'>Guidelines</p>
                    <a href="https://www.instagram.com/candid.connection/" target="_blank" className='break-words'>https://www.instagram.com/candid.connection/</a><br></br>
                    <a href="https://www.instagram.com/candid.connection/" target="_blank" className='break-words'>https://www.instagram.com/candid.connection/</a>
                </div>
                </div>
            </div>
            <div className='box-border hidden sm:block '>
                <p className='underline'>Guidelines</p>
                <a href="https://www.instagram.com/candid.connection/" target="_blank" className='break-words'>https://www.instagram.com/candid.connection/</a><br></br>
                <a href="https://www.instagram.com/candid.connection/" target="_blank" className='break-words'>https://www.instagram.com/candid.connection/</a>
            </div>
            </div>

            <div className='hidden sm:block bg-white rounded-md mt-7 p-4 text-center'>
                <img src={Icanfly} alt="" className='m-auto' />
                <Primarybtn title={btndesc.btntext} />
            </div>
        </div>
    )
}

export default Rightsection


