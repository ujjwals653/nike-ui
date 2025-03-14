import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import {arrowRight} from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full flex flex-col xl:flex-row justify-center items-start max-xl:justify-center gap-10 min-h-screen max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center xl:items-start items-center w-full text-center xl:text-left max-xl:padding-x pt-28">

        <p className='text-[24px] font-montserrat text-coral-red '>Our Summer Collection</p>

        <h1 className='mt-10 font-palanquin text-[96px] max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>

        <p className='font-montserrat text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm'>Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Show now" iconURL={arrowRight}/>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16 max-xl:justify-center'>
          {statistics.map((stat, index) => (
            <div key={index} className='flex flex-col justify-center items-start gap-2'>
              <h3 className='text-[48px] font-bold font-palanquin'>{stat.value}</h3>
              <p className='leading-7 font-montserrat'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 max-xl:min-w-screen bg-primary'>
        <img src={bigShoeImg} alt="shoe big" 
        height={500} width={610}
        className='object-contain'/>

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] w-full justify-center max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgURL={shoe} bigShoeImg={bigShoeImg} setBigShoeImg={setBigShoeImg}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero