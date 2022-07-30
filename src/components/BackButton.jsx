import React from 'react'
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function BackButton() {
  return (
    <Arrow>
        <Link to='/' className='link'>
        <BsArrowLeftSquareFill  size={30}/>
            Go Back
        
        </Link>
    </Arrow>
  )
}

const Arrow = styled.div`
  .link{
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 2rem;
   left: 10rem;
   gap: 1rem;
   padding: 1rem 3rem;
   background-color: #000;
   font-size: 20px;
   color: white;
   text-decoration: none;
   border-radius: 0.8rem;
   
  }

`


export default BackButton