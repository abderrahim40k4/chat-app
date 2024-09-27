"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MoonIcon, SunIcon, Volume2, VolumeX } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePreferance } from './store/usePreferance'

const PreferenceTap = () => {
    const [volume, setVolume] = useState(true)
    const {soundEnabled,setSoundEnabled} = usePreferance();
    const {setTheme} = useTheme()
    const volumeOnOff = ()=>{
        setSoundEnabled(!soundEnabled)
    }
  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
        <Button variant={"outline"} size={"icon"} onClick={() => setTheme("light")} >
            <SunIcon className='size-[1.2rem] text-muted-foreground'/>
        </Button>
        <Button variant={"outline"} size={"icon"} onClick={() => setTheme("dark")} >
            <MoonIcon className='size-[1.2rem] text-muted-foreground'/>
        </Button>
        <Button variant={"outline"} size={"icon"} onClick={volumeOnOff}>
            {
                soundEnabled ? (<Volume2 className='size-[1.2rem] text-muted-foreground'/>) : (<VolumeX className='size-[1.2rem] text-muted-foreground' />)
            }
        </Button>
    </div>
  )
}

export default PreferenceTap