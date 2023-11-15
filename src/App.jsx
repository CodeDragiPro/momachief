import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/ui/Navbar';

import Home from './pages/Home';
import Gallery from './pages/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/domicile' element={<Gallery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
