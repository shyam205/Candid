import React from 'react'
import Leftsection from './Leftsection'
import Middlesection from './Middlesection'
import Rightsection from './Rightsection'

function Content() {
    return (
        <div className='container-fluid flex flex-row px-4 sm:px-24 bg-primary-lightpink box-border pb-8'>
            <Leftsection />
            <Middlesection />
            <Rightsection />
        </div>
    )
}

export default Content
