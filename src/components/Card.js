import React, { useContext } from 'react'
import cartInfoContext from '../context/filter/cartInfo/cartInfoContext'

const Card = (props) => {

    const {img, name, price, product} = props;

    const cart = useContext(cartInfoContext);
    const {carInfo, setcarInfo} = cart;

    const handleAddCart = ()=>{
      
      const cart = [...carInfo];
      cart.push(product)
      setcarInfo(cart)

    }
    const handleRemove = ()=>{
      
      const cart = [...carInfo];
      let index = cart.indexOf(product)
      // console.log(index)
      cart.splice(index,index+1);
      setcarInfo(cart)

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
       <div className='flex gap-3 items-center'>
        <button onClick={handleRemove} className={'bg-[#efbc43] text-[#1f1f1f] px-2  h-fit rounded-xl font-bold ' + (carInfo.includes(product)?'block':'hidden')}>-</button>
        <button onClick={handleAddCart} className='bg-[#efbc43] text-[#1f1f1f] p-2 rounded-xl font-bold'>Add to Cart</button>
       </div>
    </div>
  )
}

export default Card