
import Home from './components/Home'
import './index.css'

import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
  )
}

export default App
