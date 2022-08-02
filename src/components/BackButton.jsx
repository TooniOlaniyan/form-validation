import React from 'react'
import {BsArrowLeftSquareFill} from 'react-icons/bs'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function BackButton() {
  return (
    <Arrow>
        <Link to='/' className='link'>
        <BsArrowLeftSquareFill className='leftArrow' size={30}/>
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
   top: 3rem;
   left: 10rem;
   gap: 1rem;
   padding: 0.8rem 1.5rem;
   background-color: #000;
   font-size: 18px;
   color: white;
   text-decoration: none;
   border-radius: 0.8rem;
   @media screen and (max-width:420px) {
    right: 0;
    padding: 1rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  
   }
   @media screen and (max-height:600px) {
    display: none;
  
   }
   @media screen and (max-height:650px) {
    top: 0;
  
   }
 
  }
  @media screen and (min-width:850px) {
    left: 0;
    top: 0.3rem;
    width: 10rem;
    font-size: 16px;
    .leftArrow{
      width: 40px;
    }
    
  
   }

`


export default BackButton