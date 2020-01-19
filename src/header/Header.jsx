

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
  
}