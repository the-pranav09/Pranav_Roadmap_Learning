import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './pages_route/About'
import Games from './pages_route/Games'

const App = () => {
  return (
    <div>
        <Routes> {/*'Routes' ek container hai jis ke andar sare Routes create honge.*/}
            <Route path='/about' element={<About />}/>
            <Route path='/games' element={<Games />}/>
        </Routes>

    </div>
  )
}

export default App