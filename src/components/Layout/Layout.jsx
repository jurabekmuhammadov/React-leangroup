import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
