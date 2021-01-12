import React, { Component } from 'react';

class Invoice extends Component {
  render() {
    return (
      <div className="invoice-card my-5 has-background-light">
        <div className="wrapper">
          <div className="list">
            <span>Subtotal</span>
            <span>${this.props.subtotal}</span>
          </div>
          <div className="list">
            <span>Discount</span>
            <span>{this.props.discount}%</span>
          </div>
          <div className="list">
            <span>Sales Tax</span>
            <span>${this.props.tax}</span>
          </div>
          <div className="divider"></div>
          <div className="list total-invoice">
            <span>Total</span>
            <span>${this.props.subtotal !== 0 ? this.props.subtotal - ((this.props.subtotal * this.props.discount) / 100) - this.props.tax : this.props.subtotal}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Invoice;