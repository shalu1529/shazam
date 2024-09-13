
//import Chart from './components/Chart';
import Home from './components/Home'
import './index.css'


import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Radio from './components/Radio';
import GettheApp from './components/GettheApp'
import Chart from './components/Chart'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/get-app' element ={<GettheApp/>}/>
        <Route path="/charts" element={<Chart/>} />
        <Route path="/radio" element={<Radio/>} />
        </Routes>
        
        </>
  )
}

export default App
