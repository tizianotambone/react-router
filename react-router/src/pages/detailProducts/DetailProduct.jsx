import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function DetailProduct() {
    // ottengo l'id dal url
    const { id } = useParams();

    //creiamo una variabile in cui salvare il prodotto
    const [product, setProduct] = useState()

    //creazione della chiamata axios singola
    const getProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data)
            })
    }

    //useEffect per avviare la chiamata axios all'avvio della pagina
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            {
                product == null
                    ? (
                        <div>Loading...</div>
                    )
                    : (
                        <div className="my-card p-5">
                            <div className="row">
                                <div className="col-12 col-md-6 text-center">
                                    <img src={product.image || product.image} className="card-img-top img-fluid " alt={product.title} />
                                </div>
                                <div className="col-12 col-md-6">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text price">€{product.price}</p>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default DetailProduct
