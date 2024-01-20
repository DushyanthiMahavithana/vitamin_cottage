import React from 'react'

const Singleproduct = ({isVisible, onClose, children}) => {
    if(!isVisible) return null;

    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();

    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    id='wrapper' 
    onClick={handleClose}>
        <div className='w-[600px] flex flex-col'>
            <button className='text-white text-xl place-self-end' onClick={()=>onClose()}>x</button>
        <div className='bg-white text-black p-2 rounded-md'>{children}</div>
        </div>
     
    </div>
  )
}

export default Singleproduct
