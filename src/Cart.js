import React from "react";
import "./styles/cart.css";
import Product from "./Product"
import ProductData from "./Data"

class Cart extends React.Component {

  maps(products) {
      return products.map(product => <Product
          productName = {product.name}
          price = {product.cost}
          limit = {product.stock}
      />)
  }

  render() {
    return (
        <div className="page-content">
            <div>
                {this.maps(ProductData.products)}
            </div>
            <h2>Add your products here!</h2>
        </div>
    );
  }

}

export default Cart;
