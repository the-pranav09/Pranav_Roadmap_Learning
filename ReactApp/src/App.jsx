import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Props_React from './components/props_react';

const App = () => {
  return (
    <div>
        <Navbar /> {/* Import 'Navbar' component. that reduse the cluter and that component we can reuse.*/}
        <Footer />
        
        <Props_React a="Shreeman Legend"/>
    </div> 
  )
}

export default App