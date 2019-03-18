import React from "react";

class Product extends React.Component {
    countClick = 0;

    addToCart(props) {
        if (props.limit === 0) {
            alert("We are all out of " + props.productName + ".");
        } else if (this.countClick === props.limit) {
            alert("There are too many " + props.productName + " in your cart.");
        } else {
            this.countClick = this.countClick + 1;
            alert("You have " + this.countClick + " " + props.productName + "(s) in your cart.")
        }
    }
    render() {
        return (
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{this.props.productName}</div>
                        <div className="description">
                            Price:${this.props.price}
                        </div>
                    </div>
                    <div className="ui bottom attached button" onClick={() => this.addToCart(this.props)}>
                        <i className="add icon"></i>
                        Add to cart
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
