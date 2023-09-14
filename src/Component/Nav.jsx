import React from 'react'
import {Link}  from "react-router-dom";


const Nav = () => {
    return (
        <div className='mx-4'>
          <ul className='flex justify-end font-bold'>
               <li className='rounded-md p-2 m-2'>
                   <Link to={"/"}>Home</Link>
               </li>
               <li className='rounded-md p-2 m-2'>
                   <Link to={"/Owner"}>Owner</Link>
               </li>
               <hr className='bg-blue-600'/>
           </ul>
   
        </div>
      )
}

export default Nav