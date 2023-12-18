import React from 'react'
import volounteer from '../assets/volounteer.png'

const Volounteer = () => {
  return (
    <div className='flex justify-center items-center m-11 gap-14 h-[100vh]'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl'>Voloun<span className='font-extrabold text-redLogo m-0'>teer</span></h1>
          <h2 className='text-2xl text-center font-bold'>We are looking for talented people to join our team of enthusiastic and hard working organizers.</h2>
          <p className='text-justify text-lg'>
            <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR is looking for resourceful and detail oriented candidates. 
            As a part of the <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR Team, the ideal candidate possesses a deep personal interest in the innovations that 
            are being created in our effervescent and unique city. Sparking interest in learning and spreading homegrown ideas 
            are the essence of our event. If you are interested in applying for any of the positions, please click the links 
            bellow.
          </p>
        </div>
        <img src={volounteer} alt="TED About" className='w-[80vh]' />
    </div>
  )
}

export default Volounteer