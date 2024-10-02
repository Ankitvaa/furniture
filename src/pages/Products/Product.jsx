import React from 'react'
  // import Category from '../category/Category'
  import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchingData, furnitureDetail } from "../../redux/fetchDataSlice";
import "./products.scss"
import { useNavigate } from 'react-router-dom';

const Product = () => {
   const dispatch = useDispatch();
   const navigate= useNavigate()
  const {data}= useSelector((state)=>state.furniture)

  useEffect(()=>{
    dispatch(fetchingData())
  },[dispatch])

  const handleClick=(itemId)=>{
    dispatch(furnitureDetail(itemId))
    navigate(`product/${itemId}`)
    
  }
  return (
     <div className='homeCategory'>
      {data.map((item)=>{
        return(
          <div title={item.name} onClick={()=>handleClick(item.id)} key={item.id}>
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
