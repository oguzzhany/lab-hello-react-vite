import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ironhacklogo from './ironlogo.png'
import nav2 from './nav2.png'
import pic1 from './pic1.png'
import pic2 from './pic2.png'
import pic3 from './pic3.png'
import pic4 from './pic4.png'

function App() {

  return (
      <div className='App' class="asd">
        <div class='div-top'>
          <nav>
            <img src={ironhacklogo} alt="" />
            <img src={nav2} alt="" />
          </nav>
          <div class='hero'>
            <h1>Say Hello to ReactJs</h1>
            <p>You will learn how to use the most fronent library, and become a super ninja developer.</p>
            <button>Awesome</button>
          </div>
        </div>
        <div class='div-bottom'>
          <div class='div-images'><img src={pic1} alt="" /><h2>Declarative</h2><h5>React makes it painless to create interactive UIs.</h5></div>
          <div class='div-images'><img src={pic2} alt="" /><h2>Components</h2><h5>Build encapsulated components that manage their state.</h5></div>
          <div class='div-images'><img src={pic3} alt="" /><h2>Single-Way</h2><h5>A set of immutable values are passed to the componenet's.</h5></div>
          <div class='div-images'><img src={pic4} alt="" /><h2>JSX</h2><h5>Statically-typed designed to run on modern browsers.</h5></div>
        </div>
      </div>
  )
}

export default App
