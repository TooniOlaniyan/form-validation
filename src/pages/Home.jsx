import React from 'react'
import {Link} from 'react-router-dom'
import {FaSignInAlt , FaSignOutAlt} from 'react-icons/fa'
import {BsUnlockFill} from 'react-icons/bs'
import styled from 'styled-components'
import GlobalStyles from '../components/GlobalStyles'
import TypeWriter from '../components/TypeWriter'


function Home() {
  return (
    <>
    <Main>
        <TypeWriter text={'Welcome On Board'}/>

        <Link to='/sign-in'>
        <SignIn>
            <BsUnlockFill fill='#000'/> SIGN IN
        </SignIn>
        </Link>

        <Link to= '/register'>
        <Register>
        <FaSignInAlt fill='white'/> REGISTER
        </Register>
        </Link>
    </Main>
    </>
  )
}



const Main = styled.main`
    display: grid;
    place-content: center;
    height: 100vh;
    grid-gap: 2rem;
    h1{
        font-size: 40px;
    }
    a{
        text-decoration: none;
        color: white;
        
    }
`
const Register = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 1rem 4rem;
    border-radius: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 25px;
    background-color: #000;
`
const SignIn = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
     border-radius: 1rem;
     color: #000;
    align-items: center;
    padding: 1rem 4rem;
    font-size: 25px;
    border: 1px solid black;
    box-shadow: rgba(149, 157, 165, 0.1) 0px 8px 24px;
`

export default Home