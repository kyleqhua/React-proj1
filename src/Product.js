import React from "react";

class Product extends React.Component {


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
                    <div className="ui bottom attached button" onClick={() => {this.props.onAddToCart(this.props.productName,this.props.price)}}>
                        <i className="add icon"></i>
                        Add to cart
                    </div>
                    <div className="ui bottom attached button" onClick={() => {this.props.onRemoveToCart(this.props.productName,this.props.price)}}>
                        <i className="x icon"></i>
                        Remove from cart
                    </div>
                </div>
            </div>
        );
    }
}
export default Product;
