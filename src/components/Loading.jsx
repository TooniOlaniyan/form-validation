import React from 'react'
import styled from 'styled-components'
import CircleLoader from "react-spinners/CircleLoader";


function Loading() {
  return (
    <CircleLoader size={200} speedMultiplier= '2' cssOverride={{
        borderColor: 'red',
        display: 'flex',
        margin: '0 auto',
        justifyContent:'center',
        alignItems: 'center',
        height: '100vh',
        marginTop: '40vh'
      }}/>
  )
}


export default Loading