import React from 'react'
import './productCard.scss'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({id,name,price,avatar}) => {
    let navigate = useNavigate()
  return (
    <div className='product_card' onClick={()=>{
        navigate(`./product/${id}`)
    }}>
        <div className='image_container'>
            <img src={`${avatar}`} alt='product' className='image' />
        </div>
        <h2 className='dark'>{name}</h2>
        <p className='dark'>$ {price}</p>
    </div>
  )
}

export default ProductCard