import React from 'react';
import './foodlist.css'

export default function FoodList (props) {
    // console.log(props.foodlist)
  return(

    <div class='foodlist'>
    {
      props.foodlist.forEach((item) => {
        console.log(item)
        // <h1>{ item }</h1>
      })
    }

    <div class='row'>
      <div class='col-8 bottom-border'><h2>Test</h2></div>
      <div class='col-4'>Box</div>
    </div>

    <div class='row'>
      <div class='col-8 bottom-border'><h2>Test</h2></div>
      <div class='col-4'>Box</div>
    </div>
    <div class='row'>
      <div class='col-8 bottom-border'><h2>Test</h2></div>
      <div class='col-4'>Box</div>
    </div>
  
   
    </div>
  )
}