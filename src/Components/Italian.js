// import './App.css';
import React, { useState } from 'react'
import { Italian } from './products.js'
import ItemsCart1 from './ItemsCart1'
import Navbar from './Navbar.js'
import Checkout from './Checkout.js'


const Electronics = () => {
  const [Item1, setItem1] = useState(Italian)
  const [AmountTotle, setAmountTotle] = useState(0)
  const [AmountTotle2, setAmountTotle2] = useState(0)
  // console.log(Item1)

  const Increment1 = (index) => {
    let newItem1 = [...Item1]
    let newAmountTotle = AmountTotle;
    let newAmountTotle2 = AmountTotle2;


    newItem1[index].quantity++;
    newAmountTotle2 += newItem1[index].Price;
    newAmountTotle++;

    setItem1(newItem1)
    setAmountTotle(newAmountTotle)
    setAmountTotle2(newAmountTotle2)
    
  }

  const Decrement1 = (index) => {
    let newItem1 = [...Item1]
    let newAmountTotle = AmountTotle;
    let newAmountTotle2 = AmountTotle2;

    if (newItem1[index].quantity > 0) {
      newItem1[index].quantity--;
      newAmountTotle2 -= newItem1[index].Price;
      newAmountTotle--;
    }
    setItem1(newItem1)
    setAmountTotle(newAmountTotle)
    setAmountTotle2(newAmountTotle2)
  }

  const reset = (index) => {
    let newItem1 = [...Item1]
    let newAmountTotle = AmountTotle;
    let newAmountTotle2 = AmountTotle2;

    newItem1.map((product) => {
      product.quantity = 0;
    })
    newAmountTotle2 = 0;
    newAmountTotle = 0;
    
    setItem1(newItem1)
    setAmountTotle2(newAmountTotle2)
    setAmountTotle(newAmountTotle)

  }

  return (
    <>
      <Navbar />
      <div className="container border border-3 rounded-4 border-light" id='smartphone'>
        {
          Item1.map((product1) => {
            return <ItemsCart1
              product1={product1}
              Increase={Increment1}
              Decrease={Decrement1}
              index={product1.id}
              key={product1.id}
              id={product1.id}
            />
          })
        }
      </div>
      <hr />
      <Checkout
        AmountTotle={AmountTotle}
        AmountTotle2={AmountTotle2}
        reset={reset}
        index={Item1.id}
      />
    </>

  )
}

export default Electronics
