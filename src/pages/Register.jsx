import React from 'react'
import styled from 'styled-components'
import SignUp from '../asset/SignUp.svg'
import { FaSignInAlt , FaGoogle} from 'react-icons/fa'
import { BiShowAlt , BiHide} from 'react-icons/bi'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import BackButton from '../components/BackButton'
import{getAuth , createUserWithEmailAndPassword, updateProfile , GoogleAuthProvider , signInWithPopup} from 'firebase/auth'
import {collection , addDoc, setDoc , doc , serverTimestamp, getDoc} from 'firebase/firestore'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {db} from '../firebase.config'
import Loading from '../components/Loading'




function Register() {
  const [isLoading , setIsLoading] = useState(false)
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    password:'',
    confirmPassword:''
  })
  const {name , email , password , confirmPassword} = formData
  const navigate = useNavigate()
  const [hide , setHide] = useState(true)
  const [hideTwo , setHideTwo] = useState(true)

  //Google AUTH
  const handleClick = async () => {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth , provider)
      const user = result.user
      const docRef = doc(db , 'users' , user.uid)
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(doc(db , 'users' , user.uid) , {
          name:user.displayName,
          email:user.email,
          timeStamp:serverTimestamp()
        })
      }
      navigate('/welcome')

      
    } catch (error) {
      toast.error('could not sign you up with Google')
      
    }

  }

// Registration form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      if(password !== confirmPassword){
        toast.error('Password must match')
        setIsLoading(false)
  
      }
      if(password.length < 6){
        toast.error('Atleast 6 character password')
        setIsLoading(false)
      }
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth , email , password)
      const user = userCredential.user
      const newData = {...formData}
      await setDoc(doc(db , 'users' , user.uid) , newData )
      navigate('/sign-in')

    } catch (error) {
      toast.error('opps')
      
    } 
  }

  //Input chnage
  const handleChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }))
    

  }

 if(isLoading){
  return <Loading/>
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
                <Field type="text" onChange={handleChange}  id='name' value={name} />
               </Input>
               <Input>
               <Label htmlFor="email">Email*</Label>
                <Field type="email" onChange={handleChange}   id='email' value={email} />
               </Input>
               <Input>
               <Label htmlFor="number">Phone  Number</Label>
                <Field type="tel" onChange={handleChange}  id='number'  />
               </Input>
                <Input>
                <Label htmlFor="password">Password*</Label>
                <Field type={hide? 'password': 'text'}  onChange={handleChange}  id='password' value={password}  />
                {hide ? <BiShowAlt size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/> : <BiHide size={25} onClick={()=>setHide(!hide)} className='passwordReveal'/>}
                </Input>
               <Input>
               <Label htmlFor="password"> Confirm Password*</Label>
                <Field type={hideTwo? 'password': 'text'} onChange={handleChange}    id='confirmPassword' value={confirmPassword} /> 
                {hideTwo ? <BiShowAlt size={25} onClick={()=>setHideTwo(!hideTwo)} className='passwordReveal'/> : <BiHide size={25} onClick={()=>setHideTwo(!hideTwo)} className='passwordReveal'/>}
               </Input>
               <Choose>
                <button className="button"> <FaSignInAlt/> Register</button>
                <div className="getSigned">
                <p>Have an Account?</p>
                <Link className='link' to= '/sign-in'>Sign-In</Link>
                </div>

               </Choose>
            </Form>
            <Google>
              <button onClick={handleClick}> <FaGoogle/> Sign Up with Google</button>
            </Google>
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
  @media screen and (max-height: 750px) {
    padding: 1rem 0;
    
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
    @media screen and (max-width: 600px) {
      display: none;

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
  @media screen and (max-width: 600px) {
    width: 80vw;
  }
  
 .button{
  padding: 0.5rem 1rem;
  font-size: 16px;
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
  top: 50px;
  right: 15px;
  cursor: pointer;
  @media screen and (max-width: 300px) {
    top: 50px;
  }
  @media screen and (max-width: 420px) {
    top: 45px;
  }
  @media screen and (max-width: 450px) {
    top: 45px;
  }
  @media screen and (max-width: 850px) {
    top: 42px;
  }
}
  


  

`
const Field = styled.input`
border-radius: 1rem;
padding: 0.7rem 2rem;
font-size: 16px;
width: 25vw;
border-color: #2c333361;
@media screen and (max-width: 420px) {
  width: 80vw;
}
@media screen and (max-width: 500px) {
  width: 80vw;
}
@media screen and (max-width: 600px) {
  width: 75vw;
}

@media screen and (max-width: 300px) {
  font-size: 14px;
}
@media screen and (max-width: 850px) {
  font-size: 14px;
}



  
`
const Label = styled.label`
  /* border: 1px solid green; */
  font-size: 16px;
  padding: 0.4rem;
  @media screen and (max-width: 300px) {
    font-size:14px;
  }
  @media screen and (max-width: 850px) {
    font-size: 14px;
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
    font-size: 15px;
    @media screen and (max-width: 300px) {
    font-size:14px;
  }
    
  }
  .link{
    text-decoration: none;
    color: #121212;
    font-weight: 900;
  }
 
`
const Google = styled.div`
  /* border: 1px solid balck; */
  margin-top: -6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 0.8rem 1.9rem;
    border-radius: 0.3rem;
    font-size: 16px;
    background-color: white;
    border-color: black;
    color: black;
    cursor: pointer;
    transition: all 1s;
    @media screen and (max-width: 420px) {
      width: max-content;
      font-size: 16px;
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