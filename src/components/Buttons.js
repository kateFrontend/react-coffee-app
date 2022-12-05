import React from 'react'

function Buttons({chooseType}) {
  return (
    <div className='btn-container'>
        <button className='change' onClick={() => chooseType("hot")}>
            hot coffee
        </button>
        <button className='change' onClick={() => chooseType("espresso")}>
        espresso
        </button>
        <button className='change' onClick={() => chooseType("iced")}>
            iced coffee
        </button>
        <button className='change' onClick={() => window.location.reload(false)}>
            all types
        </button>
    </div>
  )
}

export default Buttons