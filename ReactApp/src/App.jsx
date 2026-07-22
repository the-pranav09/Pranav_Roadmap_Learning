import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages_route/Home'
import Games from './pages_route/Games'
import About from './pages_route/About'
import Contact from './pages_route/Contact'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes> {/*'Routes' ek container hai jis ke andar sare Routes create honge.*/}
            <Route path='/about' element={<About />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/games' element={<Games />}/>
        </Routes>

    </div>
  )
}

export default App