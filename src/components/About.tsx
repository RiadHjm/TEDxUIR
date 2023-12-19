import React from 'react'
import tedAbout from '../assets/aboutTed.gif'
import tedxAbout from '../assets/aboutTedx.png'
import tedxuirAbout from '../assets/aboutTedxUir.png'

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20 relative'>
      <div className='flex justify-center items-center m-11 gap-14'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl'>About <span className='font-extrabold text-redLogo m-0'>TED</span></h1>
          <p className='text-justify'>
            TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 
            25 years ago,TED has grown to support those world-changing ideas with multiple initiatives. 
            The annual TED Conference invites the world’s leading thinkers and doers to speak for 18 minutes. 
            Their talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Al Gore, Jane Goodall, 
            Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Isabel Allende 
            and UK Prime Minister Gordon Brown. The annual TED Conference takes place in Long Beach, California, 
            with simulcast in Palm Springs; TED Global is held each year in Oxford, UK.
            TED’s media initiatives include TED.com, where new TED Talks are posted daily, and the Open Translation Project, 
            which provides subtitles and interactive transcripts as well as the ability for any TEDTalk to be translated by 
            volunteers worldwide. TEDx has established the annual TED Prize, where exceptional individuals with a wish to change 
            the world are given the opportunity to put their wishes into action; TEDx, which offers individuals or groups a way 
            to organize local, independent TED-like events around the world; and the TED Fellows program, helping world-changing 
            innovators from around the globe to become part of the TED community and, with its help, amplify the impact of their 
            remarkable projects and activities.
          </p>
        </div>
        <img src={tedAbout} alt="TED About" className='w-[80vh]' />
      </div>

      <div className='flex justify-center items-center m-11 gap-14 mt-[-10px]'>
        <img src={tedxAbout} alt="TED About" className='w-[80vh]' />
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl'>About <span className='font-extrabold text-redLogo m-0'>TEDx</span></h1>
          <p className='text-justify'>
          <span className='font-extrabold text-black m-0'>x = independently organized event</span> <br />
            In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together 
            to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion 
            and connection in a small group. These local, self-organized events are branded TEDx, where 
            x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, 
            but individual TEDx events are self-organized. For more information, visit ted.com/tedx.
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center mr-11 ml-11 mt-[-10px] gap-14'>
        <div className='flex flex-col justify-center items-center gap-8'>
          <h1 className='text-4xl'>About <span className='font-extrabold text-black m-0'>TEDx</span>UIR</h1>
          <p className='text-justify'>
            The stimulating platform of TEDxUIR is where many viewpoints come together and connect in novel and creative ways. 
            A dozen presenters will have eighteen minutes apiece to offer the talk of their life at this captivating event. 
            TEDxUIR brings together voices from a diversity of sectors, from scientists and engineers to artists and 
            entrepreneurs, offering a rich tapestry of viewpoints and ideas.
            By making the lectures available online without restriction, TEDxUIR multiplies its influence beyond a single event. 
            These stimulating conversations have the ability to inspire creativity everywhere, irrespective of location. 
            TEDxUIR is more than just a collection of speakers; it aims to develop sincere curiosity and a lifelong love of 
            learning.
            In keeping with the spirit of the worldwide TED movement, TEDxUIR enriches the rich intellectual environment of 
            its neighborhood. TEDxUIR transforms the energy of its surroundings into an immersive, one-of-a-kind, multilingual 
            experience that lasts for a full day. This atmosphere honors the ability of ideas to change the world.
          </p>
        </div>
        <img src={tedxuirAbout} alt="TED About" className='w-[80vh]' />
      </div>
    </div>
  )
}

export default About