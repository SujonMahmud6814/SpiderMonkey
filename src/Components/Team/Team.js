import React from "react";
import "./team.css";
import Member from "../Member/Member";
import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Team = () => {
    const [members, setMember] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./members.JSON")
            .then((res) => res.json())
            .then((data) => setMember(data));
    }, []);

    const handleAddToCart = (member)=>{
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {members.map((member) => (
                            <Member key={member.key} members={member}
                            handleAddToCart ={handleAddToCart}
                            ></Member>
                        ))}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cart-container">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
