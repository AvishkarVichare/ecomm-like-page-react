import React from 'react'
import Navbar from './components/Navbar'
import CartInfoState from './context/filter/cartInfo/CartInfoState'
import FilterState from './context/filter/FilterState'
import ShopPage from './pages/ShopPage'

const App = () => {
  return (
    <>
    <CartInfoState>

    <FilterState>
      <Navbar/>
     <ShopPage />
    </FilterState>

    </CartInfoState>
    </>
  )
}

export default App