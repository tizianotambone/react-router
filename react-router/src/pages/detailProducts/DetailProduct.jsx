import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetailProduct() {
    // ottengo l'id dal url
    const {id} = useParams();
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
    useEffect(()=>{
        getProduct()
    }, [])

  return (
    <>
      singolo prodotto
    </>
  )
}

export default DetailProduct
