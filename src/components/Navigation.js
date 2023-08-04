import React , {useState}from "react";
import {AiOutlineClose , AiOutlineMenu } from 'react-icons/ai'
const Navigation = () => {

  const [nav , setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)

}


  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto p-4 '>
       <h1 className=' w-full text-3xl font-bold text-[#00df9a]'>React .</h1> 
       <ul className='hidden md:flex'>
        <li className=' p-3'>Home</li>
        <li className=' p-3'>About</li>
        <li className=' p-3'>Contact</li>
        <li className=' p-3'>Resources</li>
        <li className=' p-3'>Faq</li>
       </ul>
       <div onClick={handleNav} className='block md:hidden'>
        { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        
       </div>
       <div className={nav ? ' fixed top-0  left-0 h-full w-[60%] border-r border-r-grey-900 bg-[#023] ease-in-out duration-500' : 'fixed left-[100%]'}>
       <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4 '>React .</h1> 
        <ul className=' uppercase p-4'>
        <li className=' p-3 border-b'>Home</li>
        <li className=' p-3 border-b'>About</li>
        <li className=' p-3 border-b'>Contact</li>
        <li className=' p-3 border-b'>Resources</li>
        <li className=' p-3'>Faq</li>

        </ul>
       </div>
    </div>
  )
}

export default Navigation;