
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About/AboutUs'
import Buying from './Pages/Buying/Buying'
import Renting from './Pages/Renting/Renting'
import Selling from './Pages/Selling/Selling'
import ContactUs from './Pages/Contact/ContactUs'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
     <div className='bg-[#131c26]'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Buying' element={<Buying/>}/>
        <Route path='/Rent' element={<Renting/>}/>
        <Route path='/Selling' element={<Selling/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
     </div>
    </>
  )
}

export default App
