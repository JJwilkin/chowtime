
<<<<<<< HEAD
export default function Header () {
  return(
    <nav class="navbar navbar-light bg-none">
      <h1 class="navbar-brand" href="#"><strong>starterhacks</strong></h1>
      {/* <a href="#"><img class="add" src="./assets/add.png"></img></a> */}
    </nav>
  )
=======

import React, { Component } from 'react'
import { render } from 'react-dom'
import './Header.scss'

function getData() {
  // create a new XMLHttpRequest
  var xhr = new XMLHttpRequest()

  // get a callback when the server responds
  xhr.addEventListener('load', () => {
    // update the state of the component with the result here
    console.log(xhr.responseText)
  })
  // open the request with the verb and the url
  xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
  // send the request
  xhr.send()
}
export default function Recipe() {


 
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  
>>>>>>> 8e25c57bf13c7fb0b2557356e4e10c0c6a36626b
}