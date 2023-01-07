import React, { useRef, useState } from 'react'
import { useOutside } from '../../hooks/useOutside'

const Card = ({children, onClose, ...other}) => {
  const modalRef = useRef()
  useOutside(modalRef, onClose)
  return (
    <div ref={modalRef} {...other} className='p-6 rounded-[10px] bg-white shadow-2xl w-[420px]'>{children}</div>
  )
}

export default Card