import React from 'react'
import styled from 'styled-components'
import TypeWriter from '../components/TypeWriter'

function Welcome() {
  return (
    <Main>
      <TypeWriter text={'WELCOME'}/>
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