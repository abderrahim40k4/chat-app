import { Button } from '@/components/ui/button'
import React from 'react'

const AuthButtons = () => {
  return (
    <div className="flex gap-3 md:flex-row flex-col flex-1 relative z-50">
        <Button className='w-full' variant={"outline"}>
            SignUp
        </Button>
        <Button className='w-full'>
            Log in
        </Button>
    </div>
  )
}

export default AuthButtons