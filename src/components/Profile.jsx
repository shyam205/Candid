import React from 'react';
import Avatar from '../images/Avatar1.svg';
import Fandm from '../images/fandm.svg';
import Age from '../images/age.svg';
import Location from '../images/location.svg';
import Heshe from '../images/heshe.svg';
import Email from '../images/email.svg';
import Notifyheart from '../images/notify-heart-front-gradient.svg';
import Cancel from '../images/cancel.svg';

function Profile() {
    return (
        <div className='pb-10 sm:pb-0'>
            <div>
            
            
            <div className='w-full mt-24 sm:mt-36 bg-white p-4 box-border'>
                 <img src={Avatar} className="mx-auto -mt-24 h-36 w-36" alt="" />
                 <p className='text-center mt-3 text-lg font-bold'>Finn Norris</p>
                 <div className='flex items-center max-w-max mx-auto mt-2'>
                      <div className='flex'><img src={Fandm} alt="Fandm" /><p className='ml-1'>Female</p></div>
                      <div className='flex'><img src={Age} className='ml-2' alt="Age" /><p className='ml-1'>28</p></div>
                      <div className='flex'><img src={Location} className='ml-2' alt="Location" /><p className='ml-1'>Delhi</p></div>
                 </div>
                 <div className='flex max-w-max mx-auto mt-2'><img src={Heshe} alt="Heshe" /><p className='ml-1'>She/He</p></div>
                 <div className='flex max-w-max mx-auto mt-2'><img src={Email} alt="Email" /><p className='ml-1'>finnoris@gmail.com</p></div>
                 <p className='flex justify-start w-3/4 mx-auto mt-2 text-lg font-bold'>Topic you follow:</p>
                 <div className='mt-2'>
                     <div className='flex max-w-max mx-auto mt-2'>
                     <div className='flex items-center border-solid border-2 p-1 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-7 h-5 mr-1' alt="Notifyheart" /><p className='text-xs sm:text-base'>Long Distance</p><img src={Cancel} className="ml-1 w-4 h-4" alt="Cancel" /></div>
                     <div className='flex items-center border-solid border-2 p-1 ml-2 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-7 h-5 h-5 mr-1' alt="Notifyheart" /><p className='text-xs text-base'>Long Distance</p><img src={Cancel} className="ml-1 w-4 h-4" alt="Cancel" /></div>
                     </div>
                     <div className='flex items-center max-w-max mx-auto mt-2 border-solid border-2 p-1 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-7 h-5 h-5 mr-1' alt="Notifyheart" /><p className='text-xs sm:text-base'>Long Distance</p><img src={Cancel} className="ml-1 w-4 h-4" alt="Cancel" /></div>
                     <div className='flex max-w-max mx-auto mt-2'>
                     <div className='flex items-center border-solid border-2 p-1 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-7 h-5 h-5 mr-1' alt="Notifyheart" /><p className='text-xs sm:text-base'>Long Distance</p><img src={Cancel} className="ml-1 w-4 h-4" alt="Cancel" /></div>
                     <div className='flex items-center border-solid border-2 p-1 ml-2 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-7 h-5 h-5 mr-1' alt="Notifyheart" /><p className='text-xs sm:text-base'>Long Distance</p><img src={Cancel} className="ml-1 w-4 h-4" alt="Cancel" /></div>
                     </div>
                 </div>
                 
                 <div className="inline-block bottom-0 left-0 w-full mt-8 pb-4">
                    <div className='px-4'>
                    <select className="block appearance-none w-full bg-secondary-lightdark border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Add tag(at max 3)</option>
                        <option>Confession</option>
                        <option>Date ideas</option>
                        <option>Rebound</option>
                        <option>Long Distance</option>
                    </select>
                    </div>
                </div>
                <div className="pointer-events-none bottom-2 right-0 items-center pr-5 text-gray-700 pb-4 ">
                    <svg className="fill-current h-4 w-4 float-right -translate-y-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              
                <span className='bg-primary-darkpink py-2 px-8 rounded-md sm:mt-2 mb-2 inline-block ml-auto text-white'>SAVE</span>
            </div>
           
        </div>
        </div>
    )
}

export default Profile
