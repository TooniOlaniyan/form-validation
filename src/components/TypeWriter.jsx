import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect'


function TypeWriter({text}) {
  return (
    <Writer>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(text)
      .pauseFor(2500)
      .start();
  }}
/>
    
    
    </Writer>
  )
}


const Writer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    @media screen and (max-width:420px) {
      font-size: 30px;
      width: 90vw;
      
    }
`
export default TypeWriter