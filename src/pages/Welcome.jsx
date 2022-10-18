import React from 'react'
import styled from 'styled-components'
import TypeWriter from '../components/TypeWriter'
import {getAuth} from 'firebase/auth'

function Welcome() {
  const auth = getAuth()
  return (
    <Main>
      <TypeWriter text={`Welcome ${auth.currentUser.displayName}`}/>
    </Main>
  )
}

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
  
`

export default Welcome