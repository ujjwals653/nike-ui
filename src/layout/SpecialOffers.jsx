import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse">
      <div className="flex-1 mt-11">
        <img src={offer} width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col ">

        <h1 className='mt-10 font-palanquin text-[64px] max-sm:text-[20px] max-sm:leading-[82px] font-bold'><span className='text-coral-red inline -mt-36'>Special</span> Offer</h1> 

        <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to savings, we offer unparalleled value that sets us apart.</p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className='mt-11 flex gap-4 flex-wrap'>
          <Button label="Show now"/>
          <Button label="Learn more"
          backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers