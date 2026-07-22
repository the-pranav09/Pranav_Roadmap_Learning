import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Props_React from './components/props_react';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <div className='p-10'>
        {/* <Navbar /> Import 'Navbar' component. that reduse the cluter and that component we can reuse. */}
        {/* <Footer />         */}
        {/* <Props_React a="Shreeman Legend"/> */}

        <Card name="Rohit" surname="Sharma" city="Mumbai Cha Raja" age="39  "/>
    </div>
    </div> 
  )
}

export default App