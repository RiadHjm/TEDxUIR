import React from 'react'
import Logo from './Logo'
import Card from './Card'
import { Link } from 'react-router-dom'
import homePic from '../assets/home.png'
import explore from '../assets/explore.png'
import '../style/aboutHome.css'


const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-20 m-11 mt-0'>
        <img src={homePic} alt="Home Picture" className='w-[70vh] '/>
        <div className='flex flex-col justify-center items-center gap-7'>
          <h1 className='text-center text-4xl font-semibold'>Embark on a Journey of Inspiration: Unveiling the Latest Talks and Insights from <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR</h1>
          <p className='text-justify text-lg'> Immerse yourself in a world of ideas and innovation as we invite you to explore the captivating realm of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR. 
            Our latest talks are a treasure trove of thought-provoking discussions, delivered by brilliant minds from diverse 
            fields. From cutting-edge technology to groundbreaking social initiatives, these talks promise to ignite your 
            curiosity and spark new perspectives. But that's not all – delve deeper into the <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR experience by reading our 
            recent posts. Uncover the behind-the-scenes stories, discover the passionate individuals shaping these transformative 
            discussions, and gain a deeper understanding of the impactful ideas that have graced our stage.
            Ready to be inspired? Join us on this intellectual adventure, where every talk is a journey, and every post is a 
            window into the dynamic world of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR. Whether you're a seasoned <span className='font-extrabold text-redLogo m-0'>TEDx</span> enthusiast or a newcomer eager to explore 
            fresh ideas, there's something for everyone in the vibrant landscape of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-10 justify-center items-center bg-gray-100 w-full p-10'>
        <Link to={'/about'}>
          <h1 className='text-center text-4xl font-semibold'>About <span className='font-extrabold text-redLogo m-0'>Us</span></h1>
        </Link>
        <div className='flex justify-between gap-48 items-center'>
          <div className='flex flex-col justify-center items-center gap-4 hover-text-black'>
            <div className='w-24 h-24 bg-redLogo rounded-full hover:bg-black duration-500 flex justify-center items-center'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsElEQVR4nO2Yy2oUYRCFOwEjMkYFQVcGBTG6UMwLRImXRbxlkSwUX8DLMrvoNqIvELNVgzjiEwgaQV9BM4lGvCxMQCReSbx8UlIdys5Mz6SnZqY79IFhGrr7nFP9V/1V3UGQI0cOVwCHgbvALPAN+ApMARPAELAuSCuATcB34jEDDARpBLABmKc2XAPag7QB2AWcB/ZrQAXgIDACfIgGEWQJQCdwLxLEmSBLANqAoglgOtWFHbMScyaIwSBrAK6YAO60wsBuYFj+E94vhR1iyt9hdQOSu4JSHWkU4rO/w+oGvizLw8aETS/EQmNcxhsoLcvDgSym0IQxMJLg/qvm/tuNcRlvQAazENJhO1eZPnbkaP42Ks1HB7MQ0mHbamxk91PRyIAB/kcxbiX0yVvzf4DTzXW90pRMlRZz2qR6ZHfSX4/mfHRSHW2peQ2gvUwQ1SBPfjRV47RMlaa5xWG65WlTpbAHZbYBXmizk99z2Sr1XLYmzxw51gqAncA48A74tcpt8xNwLsIn/eGJbqkop3DfFC1v88dlZqc+TEY4j8RcK1rHPJ98veYrrcCkWYEoFoAujwAkbULI58I+oKNu4pU6Hboqr43emAex5GWIPhe38XpHjd4bD8IlQ1hwcRmvVzB6PzwI7QS5x8VlvF630St5ED40hBddXMbrXTZ6RQ/CC4bwLbDZxWl5rS3Ae6N31isnLenTJJ9RavxO9MzozLhNrkA/8NuQvwR6XciDf/y9wCvDvwgc8uK3uRltOlIfJ5I8KX13OBmpsXCkGHI1H3nrmq/QNR/ot9J+3Um2anNar8fdem5Yr5V7KPM+faoh5k0Q2/Xt6id+WAJuAdsaaj4SSBdwQ8eLpJgFrgM7mma8QjD7tEbGgMdakB+1GBf1WAr/kV5zCdjbUtM5cqwR/AXOZpAIjqFdJAAAAABJRU5ErkJggg==" />
            </div>
            <h1 className='font-extrabold text-redLogo text-2xl duration-500'>TED</h1>
          </div>
          
          <div className='flex flex-col justify-center items-center gap-4 hover-text-black'>
            <div className='w-24 h-24 bg-redLogo rounded-full hover:bg-black duration-500 flex justify-center items-center'> 
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPUlEQVR4nO2XW4hOURTHj8tMuctleJTL8ODygDJJiQe3XB5IBomQofCCRh6kzIvyItI0LiGEUjxg8oBBmWnyzBAhEkaZGVH00+J/tI1zvm9/35yP7+H8a9fZe/33WuvsvfZaewdBihQpUqRIkSCAfkA10AS0qzVprG9QzACmAq+Ix0tgSlCMAMqBj3L0LjDHVlzNvu9J1gqMCYoNwE05eB7oGSHvCVwQpz4oJgDj5NgHYEAG3kDtgKE8KBYAG+XUKQ/uaXHXF9KhbsAaxW2YSSyuV5ssgm8ZxlDjobtG3Oqu2s1k5ESGTHIsgr8hhx04E7cD5Gg3zsAqTWgzI8AwYLictDFDZcwZaM33DJCH3TgjYbrbFCGrCtNkhKxesgsZstBFca4nZfcvAB0il0XIyiRrj5CNcVbXnJmrqmxtHnDfyVSjk7IbJKnIqqyqbRxeAJNj5nYk9QPhVlZFyDZL1pBhvlXeXUCjYtfaA2An0KdQdn8DWNnpMPVXcw/TiiBhkKRd4HiGMKhL2vnE7aqgWFprcMLgjlbJv6DkCP6TXdeBUarK13RgO9ReaMxkI4NiA78K2VXgO9lhnCvA2EJu42zgJPDEWcUWK+fAkE58yzhf5VyH4ngpMALorWbfy3RV+CzuF2BHJ11DZaNFvNCuzZuVNYxUjG5nWcGfmQDorp8MV/UIMMhjgQYDR53dqjNdklVmsX0r9jEETHcq6WtgNzAe6KVVnAgsAkrEPyjuJ2CB1/b+aW+hkx4PaKwEWCxbvdQmAHuAN04lr4g6fCYI7zKxFzLxlzhhMCNX5x09M53wW5SFaxfBS+K+/yMZOM/BS+F2ZlDUR1nFsCVf5x19W6Xrua14Fq6F7WXxb4SDFRp45xnD4eurMdvPev5AD6DZ95WmM2Q7YJhmA7Xq7Pc0+FD85V11PoQlBulsDjzgvOpqrfNMnYkeE8eKa4e91MeYp0OluTz2gUniPrXOU3XmekxcJ+7ZpJwPAZyT7rVBFgDzxX0cKEXlCr/3aXIXuThUhyd7H/AWf7S5NaGLjpco94c1wQfm6968kghwmMLhUFcXxPeutB14BHxLwOlv0rXtn1yZU6RIkSJFiqCI8APjkEjDzgn3pwAAAABJRU5ErkJggg==" />
            </div>
            <h1 className='font-extrabold text-redLogo text-2xl duration-500'>TEDx</h1>
          </div>
          
          <div className='flex flex-col justify-center items-center gap-4 hover-text-black hover-text-red'>
            <div className='w-24 h-24 bg-redLogo rounded-full hover:bg-black duration-500 flex justify-center items-center'>
              <img src="data:image/png;base64,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"></img>
            </div>
            <h1 className='font-extrabold text-redLogo text-2xl duration-500'>TEDx<span className='font-semibold text-black text-2xl duration-500'>UIR</span></h1>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-11 justify-center items-center mt-11'>
        <h1 className='text-center text-4xl font-semibold'>Frequently Asked <span className='font-extrabold text-redLogo m-0'>Questions</span></h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10'>
          <Card question='How do I become a speaker at TEDxUIR?' answer='To become a TEDxUIR speaker, share your compelling idea by filling out our idea proposal form on the website. Our programming committee reviews submissions, conducts interviews, and a selection committee votes to choose speakers for the event. Chosen speakers receive coaching throughout the year to refine their talks for both the event day and online sharing within the TED community.'></Card>
          <Card question='How do I stay informed about upcoming TEDxUIR events?' answer='Stay informed about upcoming TEDxUIR events by subscribing to our newsletter on the website. Receive event announcements, speaker details, and exclusive content directly in your inbox. Follow us on social media for additional updates. Do not miss out on the latest happenings – join us on this enlightening journey, be part of our vibrant community, and discover ideas worth spreading!'></Card>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-20 m-11 bg-gray-100 w-full p-10'>
        <div className='flex flex-col justify-center items-center gap-7'>
          <h1 className='text-center text-4xl font-semibold'>Ready to Explore?</h1>
          <p className='text-justify text-lg'> Immerse yourself in a world of ideas and innovation as we invite you to explore the captivating realm of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR. 
            Our latest talks are a treasure trove of thought-provoking discussions, delivered by brilliant minds from diverse 
            fields. From cutting-edge technology to groundbreaking social initiatives, these talks promise to ignite your 
            curiosity and spark new perspectives. But that's not all – delve deeper into the <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR experience by reading our 
            recent posts. Uncover the behind-the-scenes stories, discover the passionate individuals shaping these transformative 
            discussions, and gain a deeper understanding of the impactful ideas that have graced our stage.
            Ready to be inspired? Join us on this intellectual adventure, where every talk is a journey, and every post is a 
            window into the dynamic world of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR. Whether you're a seasoned TEDx enthusiast or a newcomer eager to explore 
            fresh ideas, there's something for everyone in the vibrant landscape of <span className='font-extrabold text-redLogo m-0'>TEDx</span>UIR.
          </p>
        </div>
        <img src={explore} alt="Home Picture" className='w-[80vh] '/>
      </div>


    </div>
  )
}

export default Home