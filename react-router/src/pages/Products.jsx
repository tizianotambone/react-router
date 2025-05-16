import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {

    const [products, setproducts] = useState(null);

    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setproducts(resp.data)
            })
            .catch((err) => {
                console.error("errore caricamento pagina")
            })
    };
    useEffect(() => {
        getProducts()
    }, []);


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3'>Lista Articoli</h1>
                </div>
            </div>
            <div className="row bg">
                {
                    products == null ? (
                        <div> Loading..</div>
                    ) : (
                        products.map((e) => {
                            return (
                                <div className="col-12 col-md-6 col-lg-4 mt-5 img" key={e.id}>
                                    <div className="card h-80">
                                        <img src={e.image || e.image} className="card-img-top img-fluid " alt={e.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{e.title}</h5>
                                            <p className="card-text">{e.description}</p>
                                            <p className="card-text price">€ {e.price}</p>
                                        </div>
                                    </div>
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
