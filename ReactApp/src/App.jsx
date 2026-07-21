import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <Navbar /> {/* Import 'Navbar' component. that reduse the cluter and that component we can reuse.*/}
        <Footer />
    </div> 
  )
}

export default App