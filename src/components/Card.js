import React, { useContext } from 'react'
import cartInfoContext from '../context/filter/cartInfo/cartInfoContext'

const Card = (props) => {

    const {img, name, price} = props;

    const cart = useContext(cartInfoContext);
    const {carInfo, setcarInfo} = cart;

    const handleAddCart = ()=>{
      
      setcarInfo(carInfo+1)

    }

  return (
    <div className='flex flex-col items-center w-[300px] border-2 border-x-gray-300 m-3 p-4 rounded-xl '>
       <div>
       <img className='h-[200px] w-fit' src={img} alt="" />
        <h1 className='font-extrabold'>
            {name}
        </h1>
        <h4 className='font-semibold text-red-500'>
           Rs. {price}/-
        </h4>
       </div>
       <div>
        <button onClick={handleAddCart} className='bg-[#efbc43] text-[#1f1f1f] p-2 rounded-xl font-bold'>Add to Cart</button>
       </div>
    </div>
  )
}

export default Card