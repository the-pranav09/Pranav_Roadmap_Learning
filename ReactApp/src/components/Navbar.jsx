import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=' bg-black flex py-5 px-10 items-center justify-between'>
            <h2 className='text-2xl'>Gaming Den</h2>
            <div className='flex gap-8 items-center'>
                <h4 className='text-xl'>Home</h4>
                <h4 className='text-xl'>Game</h4>
                <h4 className='text-xl'>Tournament</h4>
                <h4 className='text-xl'>Community</h4>
            </div>
        </nav>
    </div>
  )
}

export default Navbar