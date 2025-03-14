import {star} from '../assets/icons'

const Product = ({product}) => {
  return (
    <div key={product.name} className='flex flex-1 w-full flex-col max-sm:items-center'>
      <img src={product.imgURL} alt={product.name} className='w-[282px] h-[282px]' />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24}/>
        <p className='text-[20px] leading-normal font-semibold font-montserrat text-slate-gray'>(4.8)</p>
      </div>
      <h3 className='mt-2 font-palanquin font-bold text-[24px]'>{product.name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red text-[24px] leading-normal'>{product.price}</p>
    </div>
  )
}

export default Product