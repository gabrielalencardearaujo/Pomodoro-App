import React from 'react';

function Input({children, ...props}: React.ComponentProps<'input'>) {
  return (
    <div className='d-flex align-items-start justify-content-center'>
      <label htmlFor=''>{children}</label>
      <input {...props}></input>
    </div>
  )
}

export default Input