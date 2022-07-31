import React from 'react'
import styled from 'styled-components'
import { BiShowAlt , BiHide} from 'react-icons/bi'
import { FaSignOutAlt , FaGoogle} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import GetIn from '../asset/GetIn.svg'
import BackButton from '../components/BackButton'

function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/welcome')

  }
  const [hide , setHide] = useState(true)
  return (
    
    <Main>
      <BackButton className='signBack'/>
      <Image>
        <img src={GetIn} alt="" />
      </Image>
      <Form  onSubmit={handleSubmit}>
        <Input>
          <Label htmlFor="name">Name</Label>
          <Field type="text" id='name' placeholder='Enter Your Name' />
        </Input>
        <Input>
          <Label htmlFor="name">Password</Label>
          <Field type= {hide ? 'password' : 'text'} id='name' placeholder='Enter Your Password' />
          {hide ? <BiShowAlt size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/> : <BiHide size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/>}
          
        </Input>
        <button > <FaSignOutAlt/> Sign In</button>
        <Reset className="passwordReset">
        <Link className='forgotPassword' to='/forgot-password'>
        Forgot password?
        
        </Link>
        </Reset>
        <Google>
              <button> <FaGoogle/> Sign In with Google</button>
            </Google>
      </Form>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 1rem;
 
`

const Image = styled.div`
  img{
    width: 45rem;
    height: 45rem;
  }
`
const Reset = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 60%;
`
const Label = styled.label`
  font-size: 20px;
  padding: 1rem;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50vw;
  height: 100vh;
 button{
  padding: 0.7rem 12rem;
  font-size: 20px;
  border-radius: 0.5rem;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 1s;
 }
 button:hover{
  background-color: #000;
  color: #fff;
 }
 .forgotPassword{
  text-decoration: none;
  text-align: right;
  color: black;
  font-size: 18px;
  font-weight: 700;
 }

`
const Field = styled.input`
border-radius: 1rem;
padding: 0.7rem;
width: 30rem;
height: 3rem;
font-size: 20px;
border-color: #2c3333e2;
    &::placeholder{
      text-align: left;
       
    }
  
`
const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .passwordReveal{
  position: absolute;
  top: 68px;
  right: 15px;
  cursor: pointer;
}
  

`
const Google = styled.div`
  button{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0.7rem 8rem;
    border-radius: 0.3rem;
    font-size: 20px;
    background-color: #000;
    color: white;
    cursor: pointer;
    transition: all 1s;

  }
  button:hover{
    background-color: white;
    color: #000;
  }

`

export default SignIn