import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailProduct() {
    // ottengo l'id dal url
    const { id } = useParams();
    console.log(id);

    //creiamo una variabile in cui salvare il prodotto
    const [product, setProduct] = useEffect()

    //creazione della chiamata axios singola
    const getProduct = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res)
                setProduct(res)
            })
    }

    //useEffect per avviare la chiamata axios all'avvio della pagina
    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <img src={product.image || product.image} className="card-img-top img-fluid " alt={product.title} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text price">€ {product.price}</p>
            </div>
        </>
    )
}

export default DetailProduct
