import React from 'react';
import './drag-drop.css'

export default function DragDrop () {

  return(
    <div class="view-wrap">
      <div class="text">
        <h5>Upload Image</h5>
        <p>Snap a clear photo of the items you'd like to use in your dish to get started.</p>
      </div>
      <div class="box">
        <div class="input-holder">
          <button onClick={ () => document.getElementById('getFile').click()}><img class="upload" src="./assets/upload-2.png"></img></button>
          <input class="hide" id="getFile" type="file" accept="image/png, image/jpeg"></input>
        </div>
      </div>
      <div class="row">
      
        <button class="col confirm">Confirm</button>
        <button class="col confirm">Upload New</button>
      </div>
    </div>
  )
}