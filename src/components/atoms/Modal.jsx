import React from 'react'

const Modal = ({children}) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-full bg-darkTransparent flex justify-center items-center'>{children}</div>
  )
}

export default Modal