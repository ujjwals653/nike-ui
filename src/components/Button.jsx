
const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full font-montserrat text-lg leading-none  ${backgroundColor 
      ? `${backgroundColor} ${textColor} ${borderColor} border-2` : 'bg-coral-red border-coral-red text-white'} ${fullWidth && 'w-full'}`}>
        {label}
        {iconURL && <img src={iconURL} alt="icon" className="ml-2 rounded-full w-5 h-5"/>}
    </button>
  )
}

export default Button