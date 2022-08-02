import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
const Header = () => {
  return (
    <div className='header'><Link to={'/'}>UPayments Store</Link><Link to={'#'}>Register</Link></div>
  )
}

export default Header