import React from "react";
import NameList from "../NameList/NameList";

const Cart = (props) => {
    const {cart} = props;
    console.log(cart);
    let total = 0;
    for(const member of cart){
        total = total+ member.salary;
    }
        return (
        <div className="card">
            <div className="card-body" id="cardBody">
                <h2 className="card-title">Member Count: {props.cart.length} </h2>
                <h4 className="card-text">Total Cost: {total}</h4>
                {
                    cart.map((member)=><NameList member={member}></NameList>)
                }
            </div>
            
        </div>
    );
};

export default Cart;
