import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import './index.css'
import ForgotPassword from './pages/ForgotPassword'
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>
          <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        </Routes>
      </Router>
      <ToastContainer theme='dark'/>

  
    </div>
  );
}

export default App;
