import React from 'react'

function Square({value, onClick}) {

  return (
    <div className="square" onClick={onClick}>
      {value}
    </div>
  )
}

export default Square
