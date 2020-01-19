/* eslint-disable */
import React, {useState} from 'react';
import Header from '../header/Header'
import './drag-drop.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BottomNav from '../bottom-nav/bottom-nav'
const applicationKey='c14aac6f866abd8129cc457ce54da71e'

export default function DragDrop () {
  const [uploadedImage, setUploadedImage] = useState(false);
  const [test, setTest] = useState(false);
  let foodItems = [];
  let image;
  let title;
  let description;
  let url;
  let healthLabels;
  let ingredients = [];
  let calories;
  let totalTime;
  let servingSize;
  
  function getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    foodItems.push('potato');
    foodItems.push('tomato');
    
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here

      let response = JSON.parse(xhr.responseText);
      let info = response.hits[7].recipe;
      // console.log(foodItems);
      image = info.image;
      title = info.label;
      // console.log(info)
      // description = info;  //!!!!!!
      url = info.url;
      calories = info.calories.toFixed(0);
      totalTime = info.totalTime;
      servingSize = info.yield;

      healthLabels = info.dietLabels.concat(info.healthLabels);
      for (let ingredient of foodItems) {
        for (let each of info.ingredientLines) {
          if (each.includes(ingredient) && !ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
          }
        }
      }
    })
      
      // console.log(data);
    // open the request with the verb and the url
    xhr.open('GET', `https://api.edamam.com/search?q=${foodItems.join(", ")}&app_id=2159764c&app_key=${applicationKey}`)
    // send the request
    xhr.send()

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
              <Route exact path="/" component={DragDrop} />
              <Route path="/process" component={() => <FoodList foodlist={foodItems} />} />
          </Switch>
          <BottomNav />
        </header>
    
      </div>
  
      </Router>
  
    );
  }

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
      setTimeout(function () {
        preview.src = "./assets/good_fridge_edit.jpg"
      }, 2500)
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
          <input onChange={ () => previewFile(document.getElementById('getFile').files[0])} class="hide" id="getFile" type="file" accept="image/png, image/jpeg"></input>
        </div>
      </div>
      <div class="row">
        <button class="col confirm" onClick={() => getData()}><Link to={`/process`} >Confirm</Link></button> 
        <button class="col confirm" onClick={ () => document.getElementById('getFile').click()}>Upload New</button>
      </div>
    </div>
  )
}