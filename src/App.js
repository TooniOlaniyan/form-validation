import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import './index.css'

function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/welcome' element={<Welcome/>}></Route>
        </Routes>
      </Router>

  
    </div>
  );
}

export default App;