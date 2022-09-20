import React, { useContext } from 'react'
import cartInfoContext from '../context/filter/cartInfo/cartInfoContext'

const Checkout = () => {

    const cart = useContext(cartInfoContext)

    const {carInfo} = cart;

 

  return (
   <div>
    {carInfo.map(e=>{
        return(
            <div key={e.id} className='border-2 border-r-0 border-grah-300 p-6 rounded-xl flex flex-col items-center' >        
            <div>
            <img className='h-[200px] w-fit' src={e.img} alt="" />
             <h1 className='font-extrabold'>
                 {e.name}
             </h1>
             <h4 className='font-semibold text-red-500'>
                Rs. {e.price}/-
             </h4>
            </div>
            </div>

        )
    })}
   </div>
  )
}

export default Checkout