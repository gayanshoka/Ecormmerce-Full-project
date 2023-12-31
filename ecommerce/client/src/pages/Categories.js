import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Layout from "./../components/Layout/Layout";
import useCategory from '../hooks/useCategory';
import "../styles/CategoryProductStyles.css"
const Categories = () => {
    const categories = useCategory()
  return (
    <Layout title={"All categories"}>
        <h1>All Categories</h1>
         <div className='container' style={{ marginTop: "100px" } }>
               <div className='row container'>
               {categories.map(c=>(
                <div className='col-md-6 mt-5 mb-3 gx-3 gy-3' key={c._id}>
                      <Link to={`/category/${c.slug}`} className='btn btn-primary'>{c.name}</Link>
                 </div>
               ))}
                 
               </div>
         </div>
    </Layout>
  )
}

export default Categories