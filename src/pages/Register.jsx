import React from 'react'
import styled from 'styled-components'
import SignUp from '../asset/SignUp.svg'
import { FaSignInAlt , FaGoogle} from 'react-icons/fa'
import { BiShowAlt , BiHide} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import BackButton from '../components/BackButton'



function Register() {
  const navigate = useNavigate()
  const [hide , setHide] = useState(true)
  const [hideTwo , setHideTwo] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/welcome')
  }

 
  return (
      <Section>
        <BackButton/>
          <Image>
            <img src={SignUp} alt="" />
          </Image>
          <div>
            <Form onSubmit={handleSubmit}>
               <Input>
               <Label htmlFor="name">Name</Label>
                <Field type="text"  id='name' />
               </Input>
               <Input>
               <Label htmlFor="email">Email*</Label>
                <Field type="email"   id='email' />
               </Input>
               <Input>
               <Label htmlFor="number">Phone  Number</Label>
                <Field type="tel"  id='number' />
               </Input>
                <Input>
                <Label htmlFor="password">Password*</Label>
                <Field type={hide? 'password': 'text'}   id='password'  />
                {hide ? <BiShowAlt size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/> : <BiHide size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/>}
                </Input>
               <Input>
               <Label htmlFor="password"> Confirm Password*</Label>
                <Field type={hideTwo? 'password': 'text'}    id='password' /> 
                {hideTwo ? <BiShowAlt size={25} onClick={()=>setHideTwo(!hideTwo)} className='passwordReveal'/> : <BiHide size={25} onClick={()=>setHideTwo(!hideTwo)} className='passwordReveal'/>}
               </Input>
               <Choose>
                <button className="button"> <FaSignInAlt/> Register</button>
                <div className="getSigned">
                <p>Have an Account?</p>
                <Link className='link' to= '/sign-in'>Sign-In</Link>
                </div>

               </Choose>
            <Google>
              <button> <FaGoogle/> Sign Up with Google</button>
            </Google>
            </Form>
          </div>
      </Section>
    
  )
}

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 420px) {
    justify-content: center;
    
  }
  @media screen and (max-width: 850px) {
    padding: 2rem 0;
    justify-content: center;
  }
  
  
`
const Image = styled.div`
  img{
    width: 40rem;
    height: 40rem;
    @media screen and (max-width: 420px) {
      display: none;

  }
    @media screen and (max-width: 850px) {
      width: 20rem;
      height: 20rem

  }
    
  }

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100vh;
  @media screen and (max-width: 850px) {
    height: 70vh;
  }
 .button{
  padding: 0.5rem 1rem;
  font-size: 18px;
  border-radius: 0.5rem;
  background-color: #000;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  @media screen and (max-width: 420px) {
    width: 45vw;
  }
  @media screen and (max-width: 300px) {
    font-size: 14px;
  }
 }

`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.3rem;
  @media screen and (max-width: 850px) {
    gap: 0.1rem;
  }
 
  .passwordReveal{
  position: absolute;
  top: 55px;
  right: 15px;
  cursor: pointer;
  @media screen and (max-width: 300px) {
    top: 40px;
  }
}
  


  

`
const Field = styled.input`
border-radius: 1rem;
padding: 0.7rem 2rem;
font-size: 20px;
border-color: #2c333361;
@media screen and (max-width: 420px) {
  width: 80vw;
}
@media screen and (max-width: 300px) {
  font-size: 16px;
}
@media screen and (max-width: 850px) {
  font-size: 15px;
}



  
`
const Label = styled.label`
  /* border: 1px solid green; */
  font-size: 20px;
  padding: 0.4rem;
  @media screen and (max-width: 300px) {
    font-size:15px;
  }
  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
`
const Choose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem;
 

  .getSigned{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: 17px;
    @media screen and (max-width: 300px) {
    font-size:15px;
  }
    
  }
  .link{
    text-decoration: none;
    color: #121212;
    font-weight: 900;
  }
 
`
const Google = styled.div`
  button{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 1.9rem;
    border-radius: 0.3rem;
    font-size: 20px;
    background-color: white;
    border-color: black;
    color: black;
    cursor: pointer;
    transition: all 1s;
    @media screen and (max-width: 420px) {
      width: max-content;
    }
    @media screen and (max-width: 300px) {
      font-size: 16px;
      padding: 0.8rem 1.3rem;
    }
  }
  button:hover{
    background-color: black;
    color: white;
  }

`
export default Register