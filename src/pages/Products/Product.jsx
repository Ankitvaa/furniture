import React from 'react'
  // import Category from '../category/Category'
  import { useEffect } from "react"
import { UseSelector,useDispatch, useSelector } from "react-redux"
import { fetchingData } from "../../redux/fetchDataSlice";
import "./products.scss"

const Product = () => {
   const dispatch = useDispatch();
  const {status,data,error}= useSelector((state)=>state.furniture)
  console.log(data)

  useEffect(()=>{
    dispatch(fetchingData())
  },[dispatch])
  return (
     <div className='homeCategory'>
      {data.map((item)=>{
        return(
          <div>
            <img src={item.imageUrl} alt="" />
            <div className="name-price">
             <div key={item.name} className="productTitle">{item.name}</div>
            <div className="productPrice">{item.price}</div>
            </div>
          </div>
        )
      })}
    </div>
  //   <div>
  //     <Category/>
  //   </div>
  )
}

export default Product
