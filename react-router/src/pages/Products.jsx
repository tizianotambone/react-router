import React from 'react'
import  { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {

    const[products,setproducts]=useState(null);

    const getProducts=()=>{
        axios.get("https://fakestoreapi.com/products")
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
    <div className='container'>
        <div className="row">
          <div className="col-12">
            <h1>Lista Articoli</h1>
          </div>
        </div>
        <div className="row">
            {
                products == null ? (
                    <div> Loading..</div>
                ):( 
                    products.map((e)=>{
                        return(
                            <div className="col-12 col-md-4">
                                <ul>
                                    <li>{e.title}</li>
                                </ul>

                            </div>
                        )
                    })
                )
            }
        </div>

      
    </div>
  )
}

export default Products
