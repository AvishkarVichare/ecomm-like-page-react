import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import filterContext from '../context/filter/filterContext'
import data from '../data'


const ShopPage = () => {

    const f = useContext(filterContext);
    const [filterdata, setfilterdata] = useState([])

   
    const { filter, setfilter } = f;
    console.log(filter)

    useEffect(() => {
        const handleFilterForType = () => {
            let newData = data.filter(e => {
                return (e.type === filter);
            })
            return newData;
        }

        if (filter === 'all') {
            setfilterdata(data)
        }
        else if (filter === 'high' || filter === 'low') {
            let newArr = [];
            if (filter === 'low') {
                newArr= filterdata.sort((a,b)=>{return a.price-b.price})
                 
                setfilterdata([...newArr])
                // console.log("new arr "+JSON.stringify(newArr))
                // console.log("running")

            }
            else{
                filterdata.sort((a,b)=>{return b.price-a.price})
                newArr = filterdata
                setfilterdata([...newArr])

            }
        }
        else {
            setfilterdata(handleFilterForType())
          
        }

    }, [filter])

    // console.log("this is " + filterdata)

    return (
        <div className='px-12'>
            
            <Filter  />
            <div className='flex flex-wrap'>
                {filterdata.map((e, index) => {
                    return (
                     
                        <Card key={index} img={e.img} name={e.name} price={e.price} />
                       
                    )
                })}
            </div>
        </div>

    )
}

export default ShopPage

                // <Card img = {e.img} name = {e.name} price = {e.price} />
