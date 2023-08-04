import React from 'react'


const FoundationCard = () => {
  return (
    <div className='w-full bg-white py-16 px-4' >
        <div className='max-w[1240px] max-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4 rounded-full ' src='./images/masjid.jpg' alt='/' />
          <div className='flex flex-col justify-center ml-3'>
            <p className='text-[#000000] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2 ' >Manage Data Analytics Centrally </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione, illo laudantium earum ullam quis eum vero totam deleniti id magnam nisi laboriosam quam. Voluptates earum modi sed consequatur. Alias!</p>
            <button className='bg-[#164711] w-[200px] rounded-md my-6 mx-auto py-3 text-white font-bold' >Learn More</button>
          </div>
        </div>
        
    </div>
  )
}

export default FoundationCard