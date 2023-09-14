import React from 'react'
import Button from './Button'
import Nav from './Nav'
import {postsConText} from './Data'
import { useContext } from 'react'

const HomeAdmin = () => {

  const {data} = useContext(postsConText)
  console.log(data)

    return (
        <div className="flex flex-col h-screen bg-zinc-300 ">
            <Nav/>
            <h1 className="text-3xl font-bold ">Generation Thailand <br />
            Home-Admin Sector</h1>
            <Button />
            <div>
    
            </div>
            <form action="">
              <input 
              className='m-4 px-2 rounded-md drop-shadow-lg'
              type="text"
              placeholder='Name'  />

              <input 
              className='m-4 px-2 rounded-md drop-shadow-lg'
              type="text"
              placeholder='Last Name'/>

              <input 
              className='m-4 px-2 rounded-md drop-shadow-lg'
              type="text" 
              placeholder='Position'/>

              <button 
              className='bg-blue-600 rounded-md px-1 text-base font-medium drop-shadow-lg '>
                Save
              </button>
            </form>

            <table className="mx-auto border-collapse border border-slate-400 w-11/12">
                <tr className=' border border-slate-400 bg-zinc-200'>
                  <th className='border border-slate-400'>Name</th>
                  <th className='border border-slate-400'>Last Name</th>
                  <th className='border border-slate-400'>Position</th>
                  <th className='border border-slate-400'>Action</th>
                </tr>
               

            {data.map((data)=>{return(

                <tr className=' bg-zinc-100 '>
                  <td className='border border-slate-400'>{data.name}</td>
                  <td className='border border-slate-400'>{data.lastname}</td>
                  <td className='border border-slate-400'>{data.position}</td>
                  <td className='border border-slate-400'>{data.action}</td>
                </tr>

            )})}
                
            </table>
            
        </div>
      )
}

export default HomeAdmin