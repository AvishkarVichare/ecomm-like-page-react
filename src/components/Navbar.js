import React, { useContext } from 'react'
import cartInfoContext from '../context/filter/cartInfo/cartInfoContext'
import logo from '../imgs/Logo.png'

const Navbar = () => {

  const cart = useContext(cartInfoContext);
  const {carInfo, setcarInfo} = cart;

  console.log(carInfo)
  return (
    <div className='bg-[#121920] flex px-12 py-5 justify-between'>
        <div>
          <img className='h-[35px] invert' src={logo} alt="" />
        </div>

        <div className='text-gray-300'>
          <span>
          {carInfo.length} {carInfo.length<=1?(<>Item</>):(<>Items</>)} in Cart
          </span>
        
        </div>

    </div>
  )
}

export default Navbar