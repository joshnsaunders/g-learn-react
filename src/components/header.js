import React, { Component } from 'react';
import '../app.css'

const CartHeader = () => {
  return(
  <header className="header-row">
  <nav>
    <div className="container">
      <div className="nav-wrapper">
        <div className="col s12">
          <a href="/" className="brand-logo">Shopping Cart</a>
        </div>
      </div>
    </div>
  </nav>
</header>
  )
}

export default CartHeader