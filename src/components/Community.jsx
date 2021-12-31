import React from 'react';
import Vector from '../images/Vector.svg';
import Notifyheart from '../images/notify-heart-front-gradient.svg';
import Sphere from'../images/sphere-front-gradient.svg';
import Bulb from '../images/bulb-front-gradient.svg';
import Notebook from '../images/notebook-front-gradient.svg';
import Hash from '../images/hash-front-gradient.svg';
import Threedot from '../images/threedot.svg';
import Avtar from '../images/Avatar.svg';
import Blankheart from '../images/blankheart.svg';
import Message from '../images/message.svg';
import Share from '../images/share.svg';
import Send from '../images/send.svg';
import Rightsection from './Rightsection';

function Community() {
    return (
        <div>
            <div>
            
            <div className='relative w-full mt-8 sm:mr-7'>
            <input type="text" className='w-full py-1 px-12 border-solid border-2 rounded-sm border-primary-lightpink' placeholder='Search' />
            <img src={Vector} className='absolute top-3 left-4' alt="searchicon" />
            <div>
            <h1 className='font-bold mt-4 text-2xl'>Trends</h1>
            <div className='flex overflow-scroll mt-2'>
                 <div className='flex flex-col justify-center items-center border-solid border-2 border-primary-darkpink p-2 h-24 w-32 rounded'>
                     <img src={Notifyheart} alt="" />
                     <p>LDR</p>
                 </div>
                 <div className='flex flex-col justify-center items-center border-solid border-2 border-primary-darkpink p-2 h-24 w-32 ml-2 rounded'>
                     <img src={Sphere} alt="" />
                     <p>Rebound</p>
                 </div>
                 <div className='flex flex-col justify-center items-center border-solid border-2 border-primary-darkpink p-2 h-24 w-32 ml-2 rounded'>
                     <img src={Bulb} alt="" />
                     <p>Data Ideas</p>
                 </div>
                 <div className='flex flex-col justify-center items-center border-solid border-2 border-primary-darkpink p-2 h-24 w-32 ml-2 rounded'>
                     <img src={Notebook} alt="" />
                     <p>Confessions</p>
                 </div>
                 <div className='flex flex-col justify-center items-center border-solid border-2 border-primary-darkpink p-2 h-24 w-32 ml-2 rounded'>
                     <img src={Hash} alt="" />
                     <p>Misc.</p>
                 </div>
            </div>
            </div>
            <div className='block sm:hidden'>
            <Rightsection/>

            </div>
            <div className=' mt-8 sm:mt-6  max-h-maxv bg-white p-4'>
               <div className=''>
                   <div className='flex justify-between items-center'>
                       <div className='border-solid border-2 p-1 rounded-sm border-primary-lightpink'><img src={Notifyheart} className='w-4 h-3 inline-block' alt="" /><p className='inline-block ml-2'>Long Distance</p></div>
                       <div><img src={Threedot} alt="" /></div>
                   </div>
                   <div className='flex mt-3'>
                       <div><img src={Avtar} alt='' /></div>
                       <div className='ml-3'>
                           <p>Finn Norris</p>
                           <p>22/M/Delhi</p>
                       </div>
                   </div>
                   <div className='mt-2'>
                     <p>Really enjoyed the course. I felt like I was getting what you had advertised online and much more! Really enjoyed the course.</p>
                   </div>
                   <div className='flex justify-between items-center mt-2 px-2'>
                       <div className='flex'>
                           <div className='flex'><img src={Blankheart} alt="Blankheart" /><span className='inline-block ml-1'>3</span></div>
                           <div className='flex ml-2'><img src={Message} alt="Message" /><span className='inline-block ml-1'>3</span></div>
                       </div>
                       <div className='flex'><img src={Share} className='mr-2' alt="Share" /><span>3</span></div>
                   </div>
                   <div className='relative mt-3'>
                     <input type="text" className='w-full py-1 px-12 border-solid border-2 rounded-sm border-primary-lightpink' placeholder='Type your comment here...' />
                     <img src={Send} className="inline-block absolute top-2 right-4" alt='Send' />
                   </div>
               </div>
            </div>
            
            </div>
           
        </div>
        </div>
    )
}

export default Community
