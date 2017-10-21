import React, { Component } from 'react';
import Items from './components/items.js'
import CartHeader from './components/header.js'
import CartFooter from './components/footer.js'
import CartItem from './components/cartItems.js'

class App extends Component {
  constructor (props){
    super(props);
      this.state = {
        copyright:2017,
      }
}


render(){
  //const cartItem = { id: 1, product: { name: 'Mediocre Iron Watch', priceInCents: 3.99 }, quantity: 1 }
  const items = [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]
  return (
  <div>
  <CartHeader />
  <Items />
  <CartItem cartItems = { items }/>
  <CartFooter copyright={this.state.copyright}/>
  </div>
)
}
}


export default App
