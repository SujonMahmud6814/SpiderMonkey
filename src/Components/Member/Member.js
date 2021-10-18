import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./member.css";

const Member = (props) => {
    const { name, age, designation, district, salary, img } = props.members;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;

    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    src={img}
                    className="card-img-top img-fluid"
                    style={{ height: "400px" }}
                    alt="..."
                />
                <div class="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Designation: {designation}</p>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">District: {district}</p>
                    <p className="card-text">Salary: {salary}</p>
                    <button
                        onClick={() => props.handleAddToCart(props.members)}
                        className="btn btn-primary"
                    >
                        {cartIcon} Add to Cart
                    </button>
                </div>
                ;
            </div>
        </div>
    );
};

export default Member;
