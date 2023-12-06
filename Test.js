import React from 'react'
import ReactPlayer from 'react-player'

function Test() {
  return (
 <div>
     <ReactPlayer
            className='react-player fixed-bottom'
            url= 'videos/WhatsApp Video 2023-11-11 at 2.26.13 PM.mp4'
            width='80%'
            height='80%'

            controls = {true}

            />
    </div> 
  )
}

export default Test