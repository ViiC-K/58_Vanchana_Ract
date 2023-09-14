import React, { useState } from 'react'
import { createContext } from 'react'
export const postsConText =createContext({});
const Data = ({children}) => {
 
    const mockEmployees = [
        {
          id: 0,
          name: "mock",
          lastname: 'mocklastname',
          position: "Manager",
          action:"Delete"
        },
        {
          id: 1,
          name: "employee 1",
          lastname: "em",
          position: "Engineer",
          action:"Delete"
        },
        {
          id: 2,
          name: "employee 2",
          lastname: "lord",
          position: "Designer",
          action:"Delete"
        },
      ]

      const [data,setData] = useState(mockEmployees)

  return (
    <div>
        {/* <postsConText.Provider value={{data,setData}}> */}
        <postsConText.Provider value={{data}}>
          {children}
      </postsConText.Provider>
    </div>
  )
}

export default Data