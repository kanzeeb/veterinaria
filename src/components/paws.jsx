import React from 'react'
import { FaPaw } from 'react-icons/fa'
import { IoMdPaw, IoIosPaw } from 'react-icons/io'
import '../styles/paws.css'
function Paws() {
    return(
        <>
            <FaPaw className='paws paws-a'/>
            <IoIosPaw className='paws paws-b'/>
            <IoMdPaw className='paws paws-c'/>        
        </>
    )
}

export default Paws