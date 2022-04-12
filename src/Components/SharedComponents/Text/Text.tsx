import React from 'react'

const Text: React.FC = ({children}) => {
  return (
    <div className='font-sans text-sm'>
      {children}
    </div>
  )
}

export default Text