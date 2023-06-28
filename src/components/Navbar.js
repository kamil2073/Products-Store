import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  // This function passes the data from Navbar to Parent Component

  const handleChange = (e) => {

    props.handleSearch(e.target.value)
    
  }

  // Gets the URL of Page
  const hideSrch = window.location.href

  return (
    <div className='Navbar'>

      <Link to={'/'}>
      <h1 style={{textDecoration:'none'}}>Products Store</h1>
      </Link>

      {/* The search bar is hidden on the Product Details page and the search term value is sent to the handleChange Func */}

      <div><input className={hideSrch.includes('product')?'HideSrchBar':'SrchBar'} type='text' onChange={handleChange}  placeholder='Search' /></div>

    </div>
  )
}

export default Navbar