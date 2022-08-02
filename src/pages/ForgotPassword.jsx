import React, { useState  , CSSProperties} from 'react'
import TypeWriter from '../components/TypeWriter'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import BackButton from '../components/BackButton'
import {db} from '../firebase.config'
import {getAuth , sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../components/Loading'





function ForgotPassword() {
  const navigate = useNavigate()
  const [loading , setLoading] = useState(false)
  const [resetEmail , setResetEmail] = useState({
    email:''
  })
  const {email} = resetEmail
  const handleChange = (e) => {
    setResetEmail((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
      
    }))
  }

    const handleSubmit =  (e) => {
        e.preventDefault()
        const auth = getAuth();
      sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('email sent')
      })
      .catch((error) => {
          toast.error(error)
        });
    }

  return (
    <Main>
        <BackButton/>
        <div className="top">
        <TypeWriter text={'OOPS We are sorry you forgot your password'}/>
        <p style={{textAlign:'center' , fontSize:'20px' }}>Let us assist you in getting it back 😇</p>
        </div>
        <div className="restPassword">
            <Form onSubmit={handleSubmit}>
                <Field onChange={handleChange} type="email" id='email' value={email} placeholder='Enter your Email' />
                <Google>
              <button > Send TO Get Link</button>
            </Google>
            </Form>
        </div>
    </Main>
  )
}

const Main = styled.div`
   display : flex ;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
   gap: 4rem;
   .top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: 420px) {
     gap: 1rem;
     
    }
   }
   @media screen and (max-width: 420px) {
     gap: 2rem;
     
    }

`

const Field = styled.input`
border-radius: 0.3rem;
padding: 0.7rem;
width: 35rem;
height: 3rem;
font-size: 20px;
border-color: #2c3333e2;
@media screen and (max-width: 420px) {
    width: 90vw;
    font-size: 18px;
  }
@media screen and (max-width: 500px) {
    width: 90vw;
    font-size: 18px;
  }
  
`
const Google = styled.div`
  button{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0.7rem 10rem;
    border-radius: 0.3rem;
    font-size: 20px;
    background-color: #000;
    color: white;
    cursor: pointer;
    transition: all 1s;
    @media screen and (max-width: 420px) {
    padding: 0.7rem 4rem;
    font-size: 18px;
  }
    @media screen and (max-width: 450px) {
    padding: 0.7rem 2rem;
    font-size: 18px;
  }

  }

`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
    
`
export default ForgotPassword