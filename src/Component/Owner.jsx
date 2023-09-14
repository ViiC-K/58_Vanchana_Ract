import React from 'react'
import Nav from './Nav'

const Owner = () => {
    return (
        <div className="flex flex-col h-screen bg-zinc-300">
            <Nav/>
            <h1 className='text-lg font-bold mb-4'>
                ViiC-Group-I-58 
            </h1>
            <img  className="w-24 h-24 mb-4 object-cover self-center" src="https://images.unsplash.com/photo-1687360441387-0179af118555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt="Picture" />
            <h2 className='mb-2 font-bold'>Shot Biography:</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae possimus deserunt qui beatae. Totam culpa placeat voluptas ipsum ut! Aliquid excepturi voluptatibus aut provident eius quisquam, molestias itaque veritatis, at nemo ut inventore nisi ab autem architecto minus maiores corrupti! Reiciendis, totam! Delectus aliquam quo labore obcaecati similique ipsum tempora.</p>
        </div>
      )
}

export default Owner