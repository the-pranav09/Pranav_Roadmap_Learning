import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-black text-orange-500 inline-block border'>
        <h1>{props.name} {props.surname}</h1>
        <h1>{props.city} {props.age}</h1>
        <button>Add Friend</button>
    </div>
  )
}

export default Card