import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import dp1 from '../images/userDP1.jpg';
import dp2 from '../images/userDP2.jpg';
import dp3 from '../images/UserDP3.jpg';

const ProductDetails = () => {

  // useParams is used to get the product id from url
  const {productId} = useParams()
  const [product, setProduct] = useState({})

  const fetchProduct = async(id)=>{

    // Axios library is used to make the http request to fetch data and the data is stored in the response variable
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
                    .catch((err)=>{
                      console.log("err",err)
                    })
       
        // The state is updated with the product data that was fetched
         setProduct(response.data)          

  }

  // useEffect is used to run the fetchProduct() when there is a productId in the url
  useEffect(()=>{
    
    if(productId !== "") fetchProduct(productId)
    
  }, [productId])


  return (
    <div>
      
      <Navbar/>

      {/* A Loader Component is displayed when the data is fetching and then it is hidden when the data gets fetched
        Object.keys is used to get the array of keys of the object we get from dummy.json and if there are no keys present loader is shown
      */}

      {Object.keys(product).length === 0 ? <Loading/> : (
        <>
      <div className='MainCard'>

        {/* Product Images Section */}

        <div className='ProdImgBx'>
          <img className='ProdImgThumb' src={product.thumbnail} alt={product.title}/>
        </div>

        <div className='ProdImgBx' style={{marginTop:'-10px'}}>

           <div className='d-flex'>
            <div className='ProdImgs'>
              <img src={product.images[0]} alt={product.title}/>
            </div>
            <div className='ProdImgs'>
              <img src={product.images[1]} alt={product.title}/>
            </div>
          </div>
          <div className='d-flex'>
          <div className='ProdImgs'>
              <img src={product.images[2]} alt={product.title}/>
            </div>
            <div className='ProdImgs'>
              <img src={product.images[3]} alt={product.title}/>
            </div> 
         </div> 

        </div>

      </div>

      <div className='MainCrdContent'>

        <div className='centreAlign'>
            <div>
                <div className="prodTitle">{product.title}</div>
                <br/>
                <div className='prodDescription'>{product.description}</div>
            </div>

            <div>
                  <div className="prodContent">Price: <span>${product.price}</span></div>
                  <div className="prodContent">Discount: <span>{product.discountPercentage}%</span></div>
                  <div className="prodContent">Rating: <span>{product.rating}/5</span></div>
                  <div className="prodContent">Stock Available: <span>{product.stock}</span></div>
                  <div className="prodContent">Brand: <span>{product.brand}</span></div>
                  <div className="prodContent">Category: <span>{product.category}</span></div>
            </div>
        </div>

        {/* Customer Reviews Section */}
        <div className='CustomerRev'>

          <div className='centreAlign'>
            <div className='d-flex align-items-center'>
                <div><img className='userdp' src={dp1} alt='User DP'/></div>
                <div className='CustName'>John Doe</div>
            </div>
            <div className='CustRating'>4.8/5</div>
          </div>
          <div className='CustRev'>
            Amazing Product, couldn't ask for more!
          </div>
        

        <div style={{marginTop:'30px'}}>
          <div className='centreAlign'>
            <div className='d-flex align-items-center'>
                <div><img className='userdp' src={dp2} alt='User DP'/></div>
                <div className='CustName'>Travis Scott</div>
            </div>
            <div className='CustRating'>4.2/5</div>
          </div>
          <div className='CustRev'>
            I have been using this product since past year, it still feels and looks new!
          </div>
        </div>

        <div style={{marginTop:'30px'}}>
          <div className='centreAlign'>
            <div className='d-flex align-items-center'>
                <div><img className='userdp' src={dp3} alt='User DP'/></div>
                <div className='CustName'>Mary Lou</div>
            </div>
            <div className='CustRating'>3.5/5</div>
          </div>
          <div className='CustRev'>
            The Package was damaged from inside!
          </div>
        </div>

        </div>

      </div>
      </>
      )}
      </div>
  )
}

export default ProductDetails