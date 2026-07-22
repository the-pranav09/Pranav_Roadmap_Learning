import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-5 bg-black text-orange-500 inline-block p-6 text-center rounded'>
        <img className='h-32 w-32 rounded-full mb-3' src="" alt="" srcset="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.gamename}</h1>
        <h1 className='text-2xl font-semibold mb-4'>{props.price}</h1>
        <h1 className='text-2xl font-semibold mb-4'>{props.type}</h1>
        <button className='mt-4 bg-orange-400 text-white rounded font-medium px-4 py-2 '>Add Friend</button>
    </div>
  )
}

export default Card