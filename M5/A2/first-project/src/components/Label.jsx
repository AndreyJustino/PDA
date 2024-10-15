import React from 'react'

function Label({id,text, type, placeholder, event}) {
  return (
    <div>
        <label htmlFor={id}>{text}</label>
        <input type={type} placeholder={placeholder} onChange={event}/>
    </div>
  )
}

export default Label