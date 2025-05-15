import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {

    const[products,setproducts]=useState(null);

    const getProducts=()=>{
        axios.get("'https://fakestoreapi.com/products")
        .then((resp)=>{
            setproducts(resp.data)
        })
        .catch((err)=>{
            console.error("errore caricamento pagina")
        })
    };
    useEffect(()=>{
        getProducts()
    },[]);
 

  return (
    <div>
      
    </div>
  )
}

export default Products
