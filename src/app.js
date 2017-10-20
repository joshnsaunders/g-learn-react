import React, { Component } from 'react';
import './app.css'


const CartFooter = () => {
  return (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Shop ALL THE THINGS</h5>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="footer-container">
        &copy; Never
      </div>
    </div>
  </footer>
  )
}

const Items = () => {
  return (
  <div className="item-container">
  <h1>Items</h1>
  </div>
  )
}

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


export { CartHeader, CartFooter, Items }
