import React from "react";
import Cart from './Cart';
function Navbar(props){
    return(
    <div class="container px-4 px-lg-5">
                <a class="navbar-brand text-dark fs-4" href="#!">Bookshop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#!">All Products</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>      
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="button">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{props.Cartitems.length}</span>
                            {
                            props.Cartitems.map((items) => {
                                return <Cart items={items} Removecart={props.Removecart}></Cart>
                            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
                        }
                        </button>    
                    </form>
                    {props.Cartitems.length > 0 ? <h4 class="mx-2 mb-0 pt-0">Total:${props.Total}</h4> : <p class="mx-2 mb-0 pt-0 ">Total:No Items in Cart</p>}
                </div>
                </div>
                
    )
}

export default Navbar;