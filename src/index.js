import React from 'react';
import ReactDOM from 'react-dom';
import Items from './components/items.js'
import CartHeader from './components/header.js'
import CartFooter from './components/footer.js'

ReactDOM.render(
  <div>
  <CartHeader />
  <Items />
  <CartFooter />
  </div>
,
  document.getElementById('root')
)
