import React from 'react'

function Button(props : any ) {
  return (
    <div>
          <button type='button' className='bg-#FFE492 w-[126px] h-[60px] px-10 py-4 rounded-lg bg-[#FFE492] text-black ' > {props.btntext} </button>
    </div>
  )
}

export default Button
