import React from "react";

class Receipt extends React.Component {
    renderItem(item) {
        return (
            <div className="receipt-item" key={item.name}>
            <div className="receipt-text">
                {item.productName} x {item.count}
            </div>
            <div className="receipt-text">
                ${item.count * item.price}
            </div>
        </div>);
    }

    calcTot() {
        let items = this.props.items
        let tot = 0;
        for(let i = 0; i < items.length; i++) {
            let curr = items[i];
            let price = curr.price * curr.count;
            tot += price;
        }
        return tot.toFixed(2);
    }

    render() {
        const items = this.props.items;
        return (
            <div className="receipt">
                <h2 className="receipt-text">Receipt</h2>
                {items.map(this.renderItem)}
                <div className="receipt-item">
                    <div className="total">Total:</div>
                    <div className="total">${this.calcTot()}</div>
                </div>
            </div>
        );
    }
}

export default Receipt;