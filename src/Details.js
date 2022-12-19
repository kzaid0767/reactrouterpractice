import React from 'react'
import data from './productsData'
import {useParams, useNavigate} from 'react-router-dom'

function Details(){
    let {Id} = useParams()
    Id= parseInt(Id)
    const history = useNavigate()
    const selectedProduct = data.find(prod => prod.id===Id)
    
    function handleClick(){
        history('/products')
    }

    return (
        <div>
            <h3>{selectedProduct.name}</h3>
            <h4>Price: ${selectedProduct.price}</h4>
            <p>{selectedProduct.description}</p>
            <button onClick={handleClick}>Back To Products</button>
        </div>
    )
    
}

export default Details