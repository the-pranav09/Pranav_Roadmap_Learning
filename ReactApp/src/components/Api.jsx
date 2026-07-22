import axios from 'axios';
import React from 'react'

const Api = () => {
    
    const getData = async () =>{ // 'async' convert funtion in asynchronous and 'await' jab tak data nahi aata tab tak wait karega.
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=10') // 'axios.get' access the data from API.
        const data = response.data
        console.log(data)
    }

  return (

    <div>
        <button onClick={getData} className="bg-teal-500 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90  ">Get Data</button>
        <div className='p-5 bg-yellow-600'>Hare Krishna</div>
    </div>
  )
}

export default Api