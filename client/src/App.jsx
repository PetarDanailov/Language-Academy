import { Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import AboutUs from './components/aboutUs/AboutUs'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Catalogue from './components/catalog/Catalog'
import CourseDetails from './components/course-details/CourseDetails'
import { UserProvider } from './context/UserContext'



function App() {
 

  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/courses" element={<Catalogue/>}/>
        <Route path="/courses/:courseId/details" element={<CourseDetails/>}/>
      </Routes>
      <Footer/>
    </UserProvider>
  )
}

export default App
