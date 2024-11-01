import { useState } from "react"



const Button = ( {setCount, count} ) => {

    return(
        <div>
            <button 
                onClick={ () => setCount(count+1) }
            >agregar al carrito</button>
        </div>
    )
}

export default Button