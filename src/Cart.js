import React from "react";
import "./styles/cart.css";
import Product from "./Product"
import ProductData from "./Data"
import Receipt from "./Receipt"

class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [] ,
        };

    }

    handleAddToCart(product, cost) {
        let copy = [];
        copy = copy.concat(this.state.items);
        let inCart = this.checkInCart(product, copy);
        if(inCart === -1) {
           let curr = [{productName : product, price : cost, count: 1}];
           copy = copy.concat(curr);
            this.setState({
                items: copy
            });
        }
        else {
            copy[inCart].count += 1;
            this.setState({
                items: copy
            });
        }
    }

    handleRemoveToCart(product, cost) {
        let copy = [];
        copy = copy.concat(this.state.items);
        let inCart = this.checkInCart(product, copy);
        if(inCart === -1) {

        }
        else {
            copy[inCart].count -= 1;
            if(copy[inCart].count <= 0) {
               copy.splice(inCart,1)
            }
            this.setState({
                items: copy
            });
        }

    }

    checkInCart(productName, arr) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].productName === productName) {
                return i;
            }
        }
        return -1;
    }

    maps(products) {
      return products.map(product => <Product
          productName = {product.name}
          price = {product.cost}
          onAddToCart = {this.handleAddToCart.bind(this)}
          onRemoveToCart = {this.handleRemoveToCart.bind(this)}
      />)
  }



  render() {
    return (
        <div className="page-content">
            <Receipt items = {this.state.items}/>
            <div>
                {this.maps(ProductData.products)}
            </div>
        </div>
    );
  }

}

export default Cart;
