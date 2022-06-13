import React, { useState } from 'react'
import Checkout from './Checkout'
import ItemsCart3 from './ItemsCart3'
import Navbar from './Navbar'
import { Indian } from './products'

const Books = () => {

  const [Item3, setItem3] = useState(Indian);
  const [AmountTotle, setAmountTotle] = useState(0);
  const [AmountTotle2, setAmountTotle2]= useState(0);
  //   console.log(Item3)

  const Increament3 = (index) => {
    let newItem3 = [...Item3];
    let newAmountTotle2 = AmountTotle2;
    let newAmountTotle = AmountTotle;
    
    newItem3[index].quantity++;
    newAmountTotle++;
    newAmountTotle2 += newItem3[index].Price
    
    setItem3(newItem3)
    setAmountTotle2(newAmountTotle2)
    setAmountTotle(newAmountTotle)
  }


  const Decrement3 = (index) => {
    let newItem3 = [...Item3]
    let newAmountTotle = AmountTotle;
    let newAmountTotle2 = AmountTotle2;

    if (newItem3[index].quantity > 0) {
      newItem3[index].quantity--;
      newAmountTotle--;
      newAmountTotle2 -= newItem3[index].Price
    }
  
    setItem3(newItem3)
    setAmountTotle(newAmountTotle)
    setAmountTotle2(newAmountTotle2)
  }

  const reset=(index)=>{
    let resetitem=[...Item3];
    let newtotalAmount=AmountTotle;
    let newtotalAmount2=AmountTotle2;
    resetitem.map((product)=>{
      product.quantity=0;
    })
    newtotalAmount=0;
    newtotalAmount2=0;
    setItem3(resetitem)
    setAmountTotle(newtotalAmount)
    setAmountTotle2(newtotalAmount2)
  }
  return (
    <>
      <Navbar
        quantity={Item3.quantity} />

      <div className="container border border-3 rounded-4 border-light" id='books'>
        {
          Item3.map((product3) => {
            return <ItemsCart3
              product3={product3}
              key={product3.id}
              index={product3.id}
              Increase={Increament3}
              Decrease={Decrement3}
            />
          })}
      </div>
      <hr />
      <Checkout
       AmountTotle={AmountTotle}
       AmountTotle2={AmountTotle2}
       reset={reset}
       index={Item3.id}
      />


    </>
  )
}

export default Books
