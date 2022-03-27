import React from 'react'

function Cart(props) {
  return (
    <div>
        <ol class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{props.items.bookname} - ${props.items.newprice}</div>
      
    </div>
    <button onClick={() => {
        props.Removecart(props.items)
    }} class="badge bg-primary rounded-pill" type="button">X</button>
  </li>
</ol>
    </div>
  )
}

export default Cart;