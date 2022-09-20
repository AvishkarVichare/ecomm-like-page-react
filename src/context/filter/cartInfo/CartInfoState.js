import cartInfoContext from "./cartInfoContext";
import { useState } from "react";

const CartInfoState = (props)=>{
    const [carInfo, setcarInfo] = useState(0)
    return(
    <cartInfoContext.Provider value={{carInfo, setcarInfo}}>
        {props.children}
    </cartInfoContext.Provider>
    )
}

export default CartInfoState