import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Props_React from './components/props_react';
import Card from './components/Card';

const App = () => {

  const games = [
    {
    "name": "Uncharted",
    "price": 10000,
    "type" : "Action Adventure",
    "img": "https://sandbox:/turn0image4" // replace with actual image URL
  },
  {
    "name": "The Last of Us",
    "price": 8000,
    "type" : "Action",
    "img": "https://sandbox:/turn0image7"
  },
  {
    "name": "Wolverine",
    "price": 8999,
    "type" : "Action",
    "img": "https://sandbox:/turn0image1"
  },
  {
    "name": "Spider-Man",
    "price": 4999,
    "type" : "Action Story",
    "img": "https://sandbox:/turn0image11"
  }
]


  return (
    <div>
      <div className='p-10'>
        {/* <Navbar /> Import 'Navbar' component. that reduse the cluter and that component we can reuse. */}
        {/* <Footer />         */}
        {/* <Props_React a="Shreeman Legend"/> */}

        {games.map(function(game){
          return <Card gamename={game.name} price={game.price} type={game.type} image={game.img}/>
        })}

      </div>
    </div> 
  )
}

export default App