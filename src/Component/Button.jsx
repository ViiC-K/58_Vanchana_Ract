import React from 'react'
import {Link}  from "react-router-dom";

const Button = () => {
    return (
        <div className="mt-8">
          <Link to={"/HomeUser"}><button className='bg-zinc-100 font-semibold rounded-md p-4 m-8 drop-shadow-lg'>User Home Sector</button></Link>
          <Link to={"/HomeAdmin"}><button className='bg-zinc-100 font-semibold rounded-md p-4 m-8 drop-shadow-lg'>Admin Home Sector</button></Link>
          
          
        </div>
      )
}

export default Button