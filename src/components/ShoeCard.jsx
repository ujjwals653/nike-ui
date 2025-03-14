
const ShoeCard = ({imgURL, bigShoeImg, setBigShoeImg}) => {

  const handleClick = () => {
    if (bigShoeImg === imgURL.bigShoe) return;
    setBigShoeImg(imgURL.bigShoe);
  }

  return (
    <div onClick={handleClick}
    className={`cursor-pointer border-2 rounded-xl max-sm flex-1
    ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'}`}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:h-40 p-4"> 
        <img src={imgURL.thumbnail} alt="Shoe" width={127} height={103}
        className="object-contain"/>
      </div>
    </div>
  )
}

export default ShoeCard