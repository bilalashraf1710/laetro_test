import React from 'react'
import Avatar from '../Components/SharedComponents/Avatar/Avatar'
import Button from '../Components/SharedComponents/Button/Button'
import Text from '../Components/SharedComponents/Text/Text'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div className='h-screen bg-gray-100 w-screen flex flex-col '>
        <div className='h-[200px] bg-white w-[520px] m-auto border-2 border-gray-200 rounded-sm flex flex-col justify-center items-center drop-shadow-2xl'>
            <div className='w-11/12 h-2/3 flex flex-row align-center'>
                <div className='flex flex-col w-1/2 items-center justify-end border-r-2 border-r-gray-200 gap-y-5 py-3'>
                    <Text>Log your hours</Text>
                    <Button title="Add Hours"/> 
                </div>
          
           
            <div className='flex flex-col w-1/2  items-center justify-end justify-even gap-y-4 py-3'>
                    <Avatar/>
                    <Text>Matt Danzig</Text>

                </div>
            </div>

        </div>
    </div>
  )
}

export default SignIn