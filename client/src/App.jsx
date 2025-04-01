import { Route, Routes } from 'react-router'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Contacts from './components/contacts/Contacts'
import AboutUs from './components/aboutUs/AboutUs'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Catalogue from './components/catalog/Catalog'
import CourseDetails from './components/course-details/CourseDetails'
import { UserContext, UserProvider } from './context/UserContext'
import CourseCreate from './components/admin/course-create/CourseCreate'
import CoursesActions from './components/admin/course-actions/CoursesActions'
import CourseEdit from './components/admin/course-actions/course-edit/CourseEdit'
import { RoleGuard } from './components/guards/RoleGuard'
import Unauthorized from './components/unauthorized/Unauthorized'
import { AuthPagesGuard } from './components/guards/AuthPagesGuard'
import BuyCourse from './components/buyCourse/BuyCourse'
import MyCourses from './components/myCourses/MyCourses'
import { LoggedInGuard } from './components/guards/LoggedInGuard'

function App() {
  return (
    <UserProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route element={<AuthPagesGuard/>}>        
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
        <Route element={<LoggedInGuard/>}>
          <Route path='/checkout/:courseId' element={<BuyCourse/>}/> 
          <Route path="/myCourses" element={<MyCourses/>}/>
        </Route>
        <Route path="/courses" element={<Catalogue/>}/>
        <Route path="/courses/:courseId/details" element={<CourseDetails/>}/>
        <Route path='/unauthorized' element={<Unauthorized/>}/>
        <Route element={<RoleGuard/>}>
          <Route path="/admin/courseCreate" element={<CourseCreate/>}/>
          <Route path='/admin/courseActions' element={<CoursesActions/>}/>
          <Route path='/admin/:courseId/edit' element={<CourseEdit/>}/>
        </Route>
      </Routes>
      <Footer/>
    </UserProvider>
  )
}

export default App