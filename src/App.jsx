
//import Chart from './components/Chart';
import Home from './components/Home'
import './index.css'


import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Radio from './components/Radio';
import GettheApp from './components/GettheApp'
import Chart from './components/Chart'
import SingleSong from "./components/SingleSong";
import FixedLogo from './components/FixedLogo';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/get-app' element ={<GettheApp/>}/>
        <Route path="/song/:songId" element={<SingleSong />} />
        <Route path="/charts" element={<Chart/>} />
        <Route path="/radio" element={<Radio/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        <FixedLogo/>
        </>
  )
}

export default App
