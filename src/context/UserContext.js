import {createContext} from 'react'
import { userReducer } from './UserReducer'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import {
  collection,
  addDoc,
  setDoc,
  doc,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

const UserContext = createContext()

export const UserContextProvider = ({children}) => {
    const initialState = {
        name: '',
        email:'',
        password:''
    }
    const [state , dispatch] = userReducer(userReducer , initialState)

    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const auth = getAuth()
      const userCredentail =  await signInWithEmailAndPassword(auth , email , password)
      const user = userCredentail.user
      if(user){
        setLoading(false)
        navigate('/welcome')
      }
     
      
    } catch (error) {
      toast.error('Check your credentials')
      setLoading(false)
    }
    

  }

    const handleRegister = async (e) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        if (password !== confirmPassword) {
          toast.error('Password must match')
        }
        if (password.length < 6) {
          toast.error('Atleast 6 character password')
        }
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user
        const newData = { ...formData }
        await setDoc(doc(db, 'users', user.uid), newData)
        navigate('/welcome')
      } catch (error) {
        toast.error('opps')
      }
    }

    return(
        <UserContext.Provider value={{
            ...state,
            handleSubmit,
            handleRegister
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext