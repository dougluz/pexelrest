import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import PhotosStore from "./context";
import {GlobalStyle} from "./styles";

ReactDOM.render(
  <React.StrictMode>
    <PhotosStore>
      <GlobalStyle />
      <App />
    </PhotosStore>
  </React.StrictMode>,
  document.getElementById('root')
)
