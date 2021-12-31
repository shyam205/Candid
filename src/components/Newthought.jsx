
import React from 'react'
import '../css/newthought.css';
import Attachfile from '../images/attachfile.svg';

//import { Link } from 'react-router-dom';

function Newthought() {
    return (
        <div>
           
            

            <div className='w-full mt-8 mb-5 sm:mb-0 sm:mt-20 sm:mr-7 max-h-maxv bg-white p-4'>
           <div className='relative'>
               <h1 className='font-bold'>New Post</h1>
            <div className='reltive'>

            <textarea
                className="
                    form-control
                    block
                    w-full
                    h-80
                    px-3
                    pt-1.5
                    pb-16
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    mt-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Tell us what you feel..."
                ></textarea>
                <div className="inline-block absolute bottom-0 left-0 w-full pb-4">
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

                </div>

                <div className="pointer-events-none absolute bottom-2 right-0 flex items-center pr-5 text-gray-700 pb-4">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
                </div>

                <div className='flex justify-between mt-8'>
                <div className="flex justify-center">
                        <label htmlFor="toogleButton" className="flex items-center cursor-pointer">
                       
                                <div className="relative mr-2">
                                <input id="toogleButton" type="checkbox" className="hidden" />
                            
                                <div className="toggle-path bg-gray-200 w-16 h-8 rounded-full shadow-inner"></div>
                            
                                <div className="toggle-circle absolute w-7 h-7 bg-white rounded-full shadow inset-y-0 left-0"></div>
                                
                                </div>
                                Post as anonymos
                        </label>

                    </div>
                    <div className='flex justify-between items-center'>
                      <div>
                      <img src={Attachfile} alt="" className='mr-2 h-5 w-6 inline-block' />
                      <input className="cursor-pointer absolute inline-block w-7 -ml-8 opacity-0" type="file" name="vacancyImageFiles" multiple />
                      </div>
                      <a href="#" className='bg-secondary-lightdark px-4 py-2 rounded-md'>POST</a>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
export default Newthought
