import React, { Component } from 'react';

class Order extends Component {
  render() {
    return (
      <div className="order-item">
        <div className="order-content">
          <div className="order-thumb">
            {/* <img src={this.props.thumb} alt="" /> */}
          </div>
          <p>{this.props.name}</p>
        </div>
        <div className="order-set">
          <button className="decrement-button" onClick={() => this.props.onDecrement(this.props.item)}><span className="mai-remove"></span></button>
          <span className="order-number">{this.props.qty}</span>
          <button className="increment-button" onClick={() => this.props.onIncrement(this.props.item)}><span className="mai-add"></span></button>
        </div>
        <div className="order-price">
          <p>${this.props.price}</p>
        </div>
      </div>
    )
  }
}

export default Order;