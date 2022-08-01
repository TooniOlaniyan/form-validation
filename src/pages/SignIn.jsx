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
        <Reset>
        <Link className='forgotPassword' to='/forgot-password'>
        Forgot password?
        </Link>
        </Reset>
        <Google>
              <button> <FaGoogle/> Sign In with Google</button>
           <div className="tryRegister">
           New? <Link to='/register' className='forgotPassword register'>Register</Link>
           </div>
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
  @media screen and (max-width:420px) {
    overflow: hidden;
  }
  @media screen and (max-width: 420px) {
    justify-content: center;
    
  }
  @media screen and (max-height: 750px) {
    padding: 1rem 0;
    
  }

`

const Image = styled.div`
  img{
    width: 45rem;
    height: 45rem;
    @media screen and (max-width: 850px) {
      width: 20rem;
      height: 20rem

  }
    @media screen and (max-width: 600px) {
      display: none;

  }
  @media screen and (max-width:500px) {
      display: none;
    
    
  }
  @media screen and (max-width:920px) {
    display: none;
    
  }
  }
`
const Reset = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 60%;
  .forgotPassword{
  text-decoration: none;
  text-align: right;
  color: black;
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width:900px) {
    text-align: center;
    margin-right: 3rem; 
  }
  @media screen and (max-width:400px) {
    text-align: left;
    font-size: 16px;
  }
 }
  @media screen and (max-width:420px) {
    width: max-content;
    
  }

`
const Label = styled.label`
  font-size: 18px;
  padding: 1rem;
  @media screen and (max-width:900px) {
    font-size: 18px;
    padding: 0.3rem;
  }
  @media screen and (max-width: 300px) {
    font-size:15px;
  }
  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width:420px) {
    margin: 0 auto;
  }
  @media screen and (max-width:900px) {
    gap: 1rem;
  }
 button{
  padding: 0.7rem 12rem;
  font-size: 20px;
  border-radius: 0.5rem;
  border-color: #000;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 1s;
  @media screen and (max-width:420px) {
    padding: 0.7rem 3rem;
    width: 60vw;
    margin: 0 auto;
  }
  @media screen and (max-width:900px) {
    padding: 0.6rem 3rem;
  }
  
 }
 button:hover{
  background-color: #000;
  color: #fff;
 }
 .register{
  text-decoration: none;
  text-align: right;
  color: black;
  font-size: 18px;
  font-weight: 700;
  @media screen and (max-width:900px) {
    text-align: center;
    margin-right: 3rem;
    
    
  }
 }

`
const Field = styled.input`
border-radius: 1rem;
padding: 0.7rem;
width: 30rem;
height: 3rem;
font-size: 18px;
border-color: #2c3333e2;
@media screen and (max-width:420px) {
  width: 80vw;

}
@media screen and (max-width:450px) {
  width: 80vw;

}
@media screen and (max-width: 300px) {
  font-size: 16px;
}
@media screen and (max-width: 850px) {
  font-size: 15px;
}

  
`
const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  @media screen and (max-width:420px) {
    width: 70vw;  
  }
 
  .passwordReveal{
  position: absolute;
  top: 68px;
  right: 15px;
  cursor: pointer;
  
  @media screen and (max-width:900px) {
    top: 45px;
  }
  @media screen and (max-width:400px) {
    right: -20px;

  }
  @media screen and (max-width:420px) {
    right: 10px;

  }
  @media screen and (max-width:380px) {
    right: 0px;

  }
}
  

`
const Google = styled.div`
  @media screen and (max-width:420px) {
    margin: 0 auto;
  }
  button{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0.7rem 8rem;
    border-radius: 0.3rem;
    font-size: 18px;
    background-color: #000;
    color: white;
    cursor: pointer;
    transition: all 1s;
    @media screen and (max-width:420px) {
      padding: 0.7rem 3.5rem;
      /* width: 70vw; */
      font-size: 14px;
    }
    @media screen and (max-width:900px) {
      padding: 1rem;
      
    }

  }

  button:hover{
    background-color: white;
    color: #000;
  }
  .tryRegister{
   margin-top: 1rem;
   font-size: 18px;
   color: #000000bf;
  }

`

export default SignIn