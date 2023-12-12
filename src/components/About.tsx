import React from 'react'
import tedAbout from '../assets/aboutTED.gif'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10 relative'>
      <div className='flex justify-center items-center m-11 gap-14'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl'>About <span className='font-extrabold text-redLogo m-0'>TED</span></h1>
          <p className='text-justify'>
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 
            25 years ago, TED has grown to support those world-changing ideas with multiple initiatives. 
            The annual TED Conference invites the world’s leading thinkers and doers to speak for 18 minutes. 
            Their talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Al Gore, Jane Goodall, 
            Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Isabel Allende 
            and UK Prime Minister Gordon Brown. The annual TED Conference takes place in Long Beach, California, 
            with simulcast in Palm Springs; TEDGlobal is held each year in Oxford, UK.
            TED’s media initiatives include TED.com, where new TEDTalks are posted daily, and the Open Translation Project, 
            which provides subtitles and interactive transcripts as well as the ability for any TEDTalk to be translated by 
            volunteers worldwide. TED has established the annual TED Prize, where exceptional individuals with a wish to change 
            the world are given the opportunity to put their wishes into action; TEDx, which offers individuals or groups a way 
            to organize local, independent TED-like events around the world; and the TEDFellows program, helping world-changing 
            innovators from around the globe to become part of the TED community and, with its help, amplify the impact of their 
            remarkable projects and activities.
          </p>
        </div>
        <img src={tedAbout} alt="TED About" className='w-[80vh]' />
      </div>
    </div>
  )
}

export default About