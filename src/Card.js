import React from "react";
function Card(props){
    return(
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xxl-3 mb-5">
                        <div class="card h-100 border-2">
                            <div class="badge bg-dark text-white position-absolute" style={{top: "0.5rem",right: "0.5rem"}}>{props.Product.isbadge ? "Sale":""}</div>
                            <img class="image-fluid card-img-top book" src={props.Product.bookimage} alt="..." />
                            <hr class="border-2"></hr>
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <h5 class="fw-bolder fs-4">{props.Product.bookname}</h5>
                                {props.Product.israting ?
                                    <div class="d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                    <div class="bi-star-fill fs-6"></div>
                                </div> : ""} 
                                    <span class="text-muted text-decoration-line-through fs-5">{props.Product.oldprice}</span>
                                    <span class="fs-5">${props.Product.newprice}</span> 
                                     
                                </div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><button disabled={props.CartItems.some(obj => obj.id===props.Product.id)} onClick={() => {
                                    props.AddCart(props.Product)
                                }} href="#" class={props.Product.isbtnName === "View options" ?"btn btn-outline-dark mt-auto":"btn btn-outline-primary mt-auto"}>{props.Product.isbtnName}</button></div>
                            </div>
                        </div>         
                    </div>
    )
}
export default Card;