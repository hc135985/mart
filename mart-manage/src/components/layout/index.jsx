import React, { Component } from 'react'
import Header from './header';
import Footer from './footer';
import Slider from '../slider';

import "@/assets/css/reset.css";
import "@/assets/css/common.css";
import "@/assets/css/style.css";

class Layout extends Component {
  render() {
    return (
      <div className="wraper">
        <Header>
          <h2 className="mt10">校园超市</h2>
        </Header>
        <section className="content">
          <Slider>{this.props.children}</Slider>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}
export default Layout