import React from 'react';
import './drag-drop.css'

export default function DragDrop () {

  return(
    <div class="view-wrap">
      <div class="text">
        <h5>Upload Image</h5>
        <p>Take a photo of your fridge and start ake a photo of your fridge and start ake a photo of your fridge and.</p>
      </div>
      <div class="box">
        <div class="input-holder">
          <button onClick={ () => document.getElementById('getFile').click()}><img class="upload" src="./assets/upload-2.png"></img></button>
          <input class="hide" id="getFile" type="file" accept="image/png, image/jpeg"></input>
        </div>
      </div>
    </div>
  )
}