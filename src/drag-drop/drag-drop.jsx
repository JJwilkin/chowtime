import React, {useState} from 'react';
import './drag-drop.css'
import { BrowserRouter, Route, Link } from "react-router-dom";
export default function DragDrop () {

  const [uploadedImage, setUploadedImage] = useState(false);


  function previewFile() {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    setUploadedImage(true);
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  return(
    <div class="view-wrap">
      <div class="text">
        <h5>Upload Image</h5>
        <p>Snap a clear photo of the items you'd like to use in your dish to get started.</p>
      </div>
      <div class="box">
        <div class={`input-holder ${uploadedImage ? 'blank': ''}`}>
          <button onClick={ () => document.getElementById('getFile').click()}><img class={`upload ${uploadedImage ? 'new_image' : ''}`} src="./assets/upload-2.png"></img></button>
          <input onChange={() => previewFile(document.getElementById('getFile').files[0])} class="hide" id="getFile" type="file" accept="image/png, image/jpeg"></input>
          
        </div>
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
