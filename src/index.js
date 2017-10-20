import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import { CartHeader, CartFooter, Items } from './app.js'

ReactDOM.render(
  <div>
  <CartHeader />
  <Items />
  <CartFooter />
  </div>
,
  document.getElementById('root')
)
