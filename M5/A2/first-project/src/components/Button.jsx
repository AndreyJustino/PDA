import React from 'react'

function Button({functionEvent, text}) {
  return (
    <div>
        <button onClick={functionEvent}>
            {text}
        </button>
    </div>
  )
}

export default Button