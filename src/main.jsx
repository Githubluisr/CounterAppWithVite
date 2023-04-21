import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FisrtApp';
import { CounterApp } from "./CounterApp";

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
    {/* <HelloWorldApp/> */}
    {/* <FirstApp title='Juan Luis' subTitle='Aprendiendo React'/> */}
    <CounterApp value={10}/>
  </React.StrictMode>
)
