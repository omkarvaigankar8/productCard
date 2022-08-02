import React, { useState, useEffect } from 'react'
import { fetchData } from '../api'
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loader from '../components/UIKit/Loader';
const Product = (props) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    fetchData((data) => {
      setProduct(data.data.product)
    }, `products/${id}`)
  }, [id])
  return (
    <div className='App'>
      <Header />
      {loading ? (
        <>
         <Loader loading={true} />
        </>
      ) : (
        <>
      {product&&(
        <div className='container'>
          <div className="product">
            <div className='product_header'>
              <div className='image_container'>
              <img src={product.avatar} alt='product' />
              </div>
              <div className='product_title_content'>
              <h2>{product.name}</h2>
              <p>$ {product.price}</p>
              </div>
            </div>
            <div className='product_description'>
              <h3>Description</h3>
            <p>{product.description}</p>
            </div>
            </div>
        </div> 
        )}
        </> 
      )}
    </div>
  )
}

export default Product