import React from 'react'
import ProductComponent from './ProductComponent';
import Navbar from './Navbar';
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './Loading';

const ProductListing = () => {

    const [products, setProducts] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    const fetchProducts = async() => {

        // Axios library is used to make the http request to fetch data and the data is stored in the response variable
        const response = await axios.get('https://dummyjson.com/products')
        .catch((err)=> { console.log('err', err)})

        // console.log('Products:',response.data)
        setProducts(response.data.products)
       
    }

    // This Callback function is used to get the search term from Navbar component
    const handleSearch = (data) => {
        // console.log('Coming Search Data',data)
        setSearchTerm(data)
    }

    // When the component is loaded, fetchProducts() is run to fetch the product data from dummy.json
    useEffect(() => {

        fetchProducts()

    }, [])
    

  return (
    <>
    {/* Callback function is passed to Navbar through props */}

    <Navbar handleSearch={handleSearch}/>

    <div className='w-100'>

        {/* A Loader Component is displayed when the data is fetching and then it is hidden when the data gets fetched
        Object.keys is used to get the array of keys of the object we get from dummy.json and if there are no keys present loader is shown
      */}

        {Object.keys(products).length === 0 ? <Loading/> : (

        <div className='ProdList'>
            {/* Search term and products array are passed to productcomponent through props  */}

            <ProductComponent searchTerm={searchTerm} products={products}/>
        </div>

        )}

    </div>

    </>
  )
}

export default ProductListing