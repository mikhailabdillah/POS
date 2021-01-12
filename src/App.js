import React, { Component } from "react";

import "./assets/css/maicons.min.css";
import "./assets/scss/style.scss";
import "bulma";

import Sidebar from "./components/Sidebar";

import Order from "./components/Order";
import Invoice from "./components/Invoice";

class App extends Component {
  state = {
    items: [],
  }

  addOrder = (param) => {
    const hasData = this.state.items.map(function (e) { return e.id; }).indexOf(param.id);
    if (hasData === -1) {
      const newParam = { ...param, qty: 1 };
      console.log("new data");
      console.log(newParam);
      const newItem = [...this.state.items, newParam];

      this.setState({ items: newItem });
    } else {
      const items = [...this.state.items];
      items[hasData].qty++;
      console.log("update data");
      console.log(items[hasData]);
      this.setState({ items: items });
    }
  }

  itemIncrement = (param) => {
    const index = this.state.items.map(function (e) { return e.id; }).indexOf(param.id);
    const items = [...this.state.items];
    items[index].qty++;
    console.log("Increment");
    return this.setState({ items: items });
  }

  itemDecrement = (param) => {
    const index = this.state.items.map(function (e) { return e.id; }).indexOf(param.id);
    let items = [...this.state.items];
    if (items[index].qty > 1) {
      items[index].qty--;
      this.setState({ items: items });
    }
    else {
      items = this.state.items.filter(c => c.id !== param.id);
      this.setState({ items: items });
    }
    console.log("Decrement");
  }

  resetCart = () => {
    return this.setState({ items: [] });
  }

  render() {
    const dataProduct_Coffee = [
      { id: 1, name: "Cappucino", price: 20.5, thumb: "" },
      { id: 2, name: "Macchiato", price: 22, thumb: "" },
      { id: 3, name: "Caramel Latte", price: 24, thumb: "" },
      { id: 4, name: "Americano", price: 20, thumb: "" },
      { id: 5, name: "Flat White", price: 21, thumb: "" },
      { id: 6, name: "Granola", price: 20.5, thumb: "" },
      { id: 7, name: "Mocca Latte", price: 20, thumb: "" }
    ]
    const dataProduct_NonCoffee = [
      { id: 1, name: "Lemonande", price: 18, thumb: "" },
      { id: 2, name: "Iced Tea", price: 15, thumb: "" },
      { id: 3, name: "Hot Tea", price: 12, thumb: "" },
      { id: 4, name: "Hot Chocolate", price: 21.5, thumb: "" },
    ]
    let subTotal = 0;
    const taxSales = 1;
    const discount = 10;

    this.state.items.map(function (e) { return subTotal += e.price * e.qty });

    return (
      <div>
        <div className="main-container">

          <div className="topbar">
            <div className="search-bar mb-5">
              {/* <div className="icon"><span className="mai-search"></span></div> */}
              <input type="text" name="s" className="input is-rounded" placeholder="Search" />
            </div>
            <div className="menu-bar">
              <span className="mai-menu"></span>
            </div>
          </div>

          <h4 className="title-box">Coffee</h4>
          <div className="main-box">
            {
              dataProduct_Coffee.map(product => {
                return (
                  <div className="item" key={product.id} onClick={() => this.addOrder(product)}>
                    <div className="product-thumb">
                      {/* <img src={product.thumb} alt="" /> */}
                    </div>
                    <div className="product-info">
                      <span className="product-name">{product.name}</span>
                      <span className="price-tag">${product.price}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="divider"></div>

          <h4 className="title-box">Non-Coffee</h4>
          <div className="main-box">
            {
              dataProduct_NonCoffee.map(product => {
                return (
                  <div className="item" key={product.id} onClick={() => this.addOrder(product)}>
                    <div className="product-thumb">
                      {/* <img src={product.thumb} alt="" /> */}
                    </div>
                    <div className="product-info">
                      <span className="product-name">{product.name}</span>
                      <span className="price-tag">${product.price}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Sidebar onReset={this.resetCart}>
          <div className="order-list">
            {
              this.state.items.map((order, index) => {
                return (
                  <Order key={index} item={order} thumb={order.thumb} name={order.name} onIncrement={this.itemIncrement} onDecrement={this.itemDecrement} price={order.price} qty={order.qty}></Order>
                )
              })
            }
          </div>
          <Invoice subtotal={subTotal} discount={discount} tax={taxSales} />
          <button className="button is-link is-fullwidth py-5">Pay Now With</button>
        </Sidebar>
      </div>
    );
  }
}

export default App;
