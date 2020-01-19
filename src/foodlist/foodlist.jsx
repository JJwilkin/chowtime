import React from 'react';
import './foodlist.css'

export default function FoodList (props) {
    // console.log(props.foodlist)
  return(
    <>
    {
      props.foodlist.forEach((item) => {
        console.log(item)
        // <h1>{ item }</h1>
      })
    }
    </>
  )
}