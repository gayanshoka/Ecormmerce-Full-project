import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/CategoryProductStyles.css"


const CategoryProduct = () => {
   const params = useParams()
   const Navigate = useNavigate()
   const [products, setProduct] = useState([]);
   const [category, setCategory] = useState([]);
   useEffect(()=>{
    if(params?.slug) getProductsByCat()
   },[params?.slug])
   

   const getProductsByCat = async () => {
    try {
      const {data} = await axios.get(`/api/v2/product/product-category/${params.slug}`);
      setProduct(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
   }
  return (
    <Layout>
       <div className='container mt-3 category'>
           <h2 className='text-center'>{category?.name}</h2>
           <h6 className='text-center'>{products?.length}result found</h6>
           <div className='row'>
           <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v2/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <button type="button" className="btn btn-primary ms-1" onClick={()=>Navigate(`/product/${p.slug}`)}>More Deatailes</button>
                  

                </div>
              </div>
                

            ))}
          </div>
           </div>
       </div>
    </Layout>
  )
}

export default CategoryProduct