/* eslint-disable */
import React, {useState} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
export default function Anaylze () {

  return(
    <div class="view-wrap">
    <div class="text">
      <h5>Upload Image</h5>
      <p>Snap a clear photo of the items you'd like to use in your dish to get started.</p>
    </div>
    <div class="box">
      {/* <div class={`input-holder ${uploadedImage ? 'blank': ''}`}> */}
        {/* <button onClick={ () => document.getElementById('getFile').click()}><img class={`upload ${uploadedImage ? 'new_image' : ''}`} src="./assets/upload-2.png"></img></button> */}
        
      {/* </div> */}
    </div> 
    <div class="row">
    <Link to={`/process`} >
      <button class="col confirm" >Confirm</button> 
      </Link>
      <button class="col confirm" onClick={ () => document.getElementById('getFile').click()}>Upload New</button>
    </div>
  </div>
  )


}
