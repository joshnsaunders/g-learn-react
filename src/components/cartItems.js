import React, { Component } from 'react';
import '../app.css'
import Mapitems from './mapItems'


class CartItem extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }


render(){
  return (
      <div className="collection">
        <div className="item-title collection-item row grey lighten-3">
          <div className="col s8">Product</div>
          <div className="col s2">Price</div>
          <div className="col s2">Quantity</div>
        </div>
        <div className="collection-item">
          <div className="cart-items-row">
        <Mapitems items= { this.props.cartItems } />
          </div>
        </div>
      </div>
  )
}
}

export default CartItem
