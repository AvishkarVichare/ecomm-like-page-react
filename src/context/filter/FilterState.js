import filterContext from "./filterContext";
import { useState } from "react";

const FilterState = (props)=>{
    const [filter, setfilter] = useState('all');


    return(
        <filterContext.Provider value={{filter,setfilter}}>
            {props.children}
        </filterContext.Provider>
    )
}

export default FilterState;