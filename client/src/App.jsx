import { Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import AboutUs from './components/aboutUs/AboutUs'




function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
