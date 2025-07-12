
import { Routes, Route, Navigate,} from 'react-router-dom'
import Home from './Home'
import Menu from './MenuComponent'
import About from './About'
import Contact from './Contact'
import SignIn from './SignIn'


const BodyComponent = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/menu' element={<MenuComponent />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Redirect root (/) to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default BodyComponent