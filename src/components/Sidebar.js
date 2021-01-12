import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-container">
        <div className="wrapper">
          <header className="header">
            <h2 className="title">Current Order</h2>
            <button className="button is-danger is-light is-small" onClick={this.props.onReset}>Clear All</button>
          </header>

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Sidebar;