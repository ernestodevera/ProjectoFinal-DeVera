import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { initializeApp } from "firebase/app"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.json"
import App from './App.jsx'
import './index.css'

const firebaseConfig = {

  apiKey: "AIzaSyC-HXsc_9BFmOJTEibGm8fAHtiA1EHzsOc",

  authDomain: "music-center-e7614.firebaseapp.com",

  projectId: "music-center-e7614",

  storageBucket: "music-center-e7614.appspot.com",

  messagingSenderId: "661385273663",

  appId: "1:661385273663:web:470030dd711b757b57b38a"

};

const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
