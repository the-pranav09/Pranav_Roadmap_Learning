import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=' bg-black text-orange-500 flex py-5 px-10 items-center justify-between'>

            <h2 className='text-2xl font-bold text-orange-400'>Gaming Den</h2>

            <div className='flex gap-8 items-center'>
                <h4 className='text-xl hover:text-white'>Home</h4>
                <h4 className='text-xl hover:text-white'>Game</h4>
                <h4 className='text-xl hover:text-white'>Tournament</h4>
                <h4 className='text-xl hover:text-white'>Community</h4>
            </div>
        </nav>
    </div>
  )
}

export default Navbar