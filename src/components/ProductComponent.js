import React from 'react'
import { Link } from 'react-router-dom'

// The props are destructured for usage inside the component
const ProductComponent = ({products,searchTerm}) => {

    // console.log('Products inside ProdComp:',products)
    // console.log('Search inside ProdComp:',searchTerm)


  return (
    <>

    {/* Filter method is used to filter the data using search term provided in the Navbar
    If the search term is empty string then the whole array will be returned to the map method.
    If the data includes the search term(using includes() method) then only the data will be passed to the map method which will 
    return the data one by one to the component
    toLowerCase is used to avoid any conflicts if there are any capital letters present */}

     {products.filter((val)=>{

        if(searchTerm==='') return val

        else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
        {
          return val
        }

     }).map((item)=>{

        return(

           <div className="card" key={item.id}>

            {/* On click of the Link component which we got from react-router-dom it will route us to the url provided  */}
            <Link to={`/product/${item.id}`}>
                <div className="image">
                    <img src={item.thumbnail} alt={item.title} />
                </div>
            
             <div className="content">
               <div className="prodTitle">{item.title}</div>
               <br/>
               <div className='prodDescription'>{item.description}</div>
               <br/>
               <div className="prodContent">Price: <span>${item.price}</span></div>
               <div className="prodContent">Discount: <span>{item.discountPercentage}%</span></div>
               <div className="prodContent">Rating: <span>{item.rating}/5</span></div>
               <div className="prodContent">Stock Available: <span>{item.stock}</span></div>
               <div className="prodContent">Brand: <span>{item.brand}</span></div>
               <div className="prodContent">Category: <span>{item.category}</span></div>
             </div>
           </Link>
           </div>
         
)
    })} 

  </>
  
  )

}

export default ProductComponent