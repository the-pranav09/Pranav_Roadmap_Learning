import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-black text-orange-500 inline-block p-6 text-center rounded'>
        <img className='ml-2.5 h-32 w-32 rounded-full mb-3' src="" alt="" srcset="" />
        <h1 className='text-2xl font-semibold mb-4'>{props.name} {props.surname}</h1>
        <h1>{props.city} {props.age}</h1>
        <button className='mt-4 bg-orange-400 text-white rounded font-medium px-4 py-2 '>Add Friend</button>
    </div>
  )
}

export default Card