import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav className=' bg-black text-orange-500 flex py-5 px-10 items-center justify-between'>

            <h2 className='text-2xl font-bold text-orange-400'>Gaming Den</h2>

            {/* <div className='flex gap-8 items-center underline '>
                <h4 className='text-xl hover:text-white'>Home</h4>
                <h4 className='text-xl hover:text-white'>Game</h4>
                <h4 className='text-xl hover:text-white'>Tournament</h4>
                <h4 className='text-xl hover:text-white'>Community</h4>
            </div> */}

            <div className='flex gap-8 items-center underline'>
              <Link to ='/'>Home</Link>
              <Link to ='/about'>About</Link>
              <Link to ='/games'>Games</Link>
              <Link to ='/contact'>Contact</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar