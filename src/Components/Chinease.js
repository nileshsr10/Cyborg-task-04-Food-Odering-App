import React, { useState } from 'react'
import Checkout from './Checkout.js'
import ItemsCart2 from './ItemsCart2.js'
import Navbar from './Navbar.js'
import { Chinease } from './products.js'

const Accessories = () => {
  const [Item2, setItem2] = useState(Chinease)
  const [AmountTotle, setAmountTotle] = useState(0)
  const [AmountTotle2, setAmountTotle2] = useState(0)
  // console.log(Item2)

  const Increment2 = (index) => {
    let newItem2 = [...Item2]
    let newAmountTotle = AmountTotle
    let newAmountTotle2 = AmountTotle2

    newItem2[index].quantity++;
    newAmountTotle2 += newItem2[index].Price;
    newAmountTotle++;
    setItem2(newItem2)
    setAmountTotle(newAmountTotle)
    setAmountTotle2(newAmountTotle2)
  }

  const Decrement2 = (index) => {
    let newItem2 = [...Item2]
    let newAmountTotle = AmountTotle;
    let newAmountTotle2 = AmountTotle2;
    
    if (newItem2[index].quantity > 0) {
      newItem2[index].quantity--;
      newAmountTotle2 -= newItem2[index].Price;
      newAmountTotle--;
    }

    setItem2(newItem2)
    setAmountTotle(newAmountTotle)
    setAmountTotle2(newAmountTotle2)
  }

  const reset = (index) => {
    let reset = [...Item2];
    let resetTotal = AmountTotle;
    let resetTotal2 = AmountTotle2;

    reset.map((product) => {
      product.quantity = 0;
    })
    resetTotal = 0;
    resetTotal2 = 0
    setItem2(reset)
    setAmountTotle(resetTotal)
    setAmountTotle2(resetTotal2)
  }

  return (
    <>
      <Navbar />
      <div className="container border border-3 rounded-4 border-light" id='Accessories'>
        {
          Item2.map((product2) => {
            return <ItemsCart2
              product2={product2}
              key={product2.id}
              Increase={Increment2}
              Decrease={Decrement2}
              index={product2.id}
            />
          })
        }
      </div>
      <hr />
      <Checkout
        AmountTotle={AmountTotle}
        AmountTotle2={AmountTotle2}
        reset={reset}
        index={Item2.id}
      />
    </>
  )
}

export default Accessories
