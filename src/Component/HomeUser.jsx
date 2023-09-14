import React from 'react'
import Nav from './Nav'
import Button from './Button'
import { createContext } from 'react'
import {postsConText} from './Data'
import { useContext } from 'react'

const HomeUser = () => {
  //const {data,setData} = useContext(postsConText)
  const {data} = useContext(postsConText)
  console.log(data)
    return (
        <div className="flex flex-col h-screen bg-zinc-300">
             <Nav/>
             <h1 className="text-3xl font-bold ">
                Generation Thailand <br />
                Home-User Sector
            </h1>
            <Button/>
            
              <table className="mx-auto border-collapse border border-slate-400 w-11/12">
                  <tr className=' border border-slate-400 bg-zinc-200'>
                    <th className='border border-slate-400'>Name</th>
                    <th className='border border-slate-400'>Last Name</th>
                    <th className='border border-slate-400'>Position</th>
                  </tr>
                  {data.map((data)=>{return(

                  <tr className=' bg-zinc-100 '>
                    <td className='border border-slate-400'>{data.name}</td>
                    <td className='border border-slate-400'>{data.lastname}</td>
                    <td className='border border-slate-400'>{data.position}</td>
                  </tr>
                  
                  )})}
              </table>
            
            
        </div>
      )
}

export default HomeUser