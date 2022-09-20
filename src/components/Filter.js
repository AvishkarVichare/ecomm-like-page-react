import React, { useContext } from 'react'
import filterContext from '../context/filter/filterContext'

const Filter = () => {

  const f = useContext(filterContext);
  const { setfilter } = f;

  const handleOnchange = (e) => {
    setfilter(e.target.value)
  }

  return (
    <div className='my-5 border-b-2 border-black w-full'>
      {/* type  */}
      <label className='font-extrabold' htmlFor="filter">Filter:</label>
      <select className='border-2 border-black px-2 py-1 rounded-xl mx-3' onChange={handleOnchange} name="filter" id="filter">
        <option value="all"> All</option>
        <option value="tshirt"> By t-shirts</option>
        <option value="shirt"> By shirts</option>
        <option value="pants"> By pants</option>
      </select>

      {/* prices */}
      <button className='border-2 border-black px-2 p-1 rounded-xl mx-2' onClick={e=>{setfilter('low')}}>Price Low to High</button>
      <button className='border-2 border-black px-2 p-1 rounded-xl mx-2' onClick={e=>{setfilter('high')}}>Price High to Low</button>

    </div>
  )
}

export default Filter