
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
   <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-3xl shadow-3xl px-10 py-16">
    <div className="w-11 h-11 flex justify-center items-center rounded-full bg-coral-red">
        <img src={imgURL} alt={label} width={24} height={24}/>
    </div>
    <h3 className="mt-5 font-palanquin text-[28px] leading-normal font-bold">{label}</h3>
    <p className="mt-3 break-words font-montserrat text-[18px] leading-normal">{subtext}</p>
   </div>
  )
}

export default ServiceCard