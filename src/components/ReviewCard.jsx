import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-col items-center gap-4">
        <img src={imgURL} alt="PP" 
        className="rounded-full w-[120px] h-[120px] object-cover"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} alt="rating" width={24} height={24}
            className="object-contain" />
            <p className="text-[20px] font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-[20px] text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard