import React, { Component } from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/HeroSection/Hero";
import About from "../components/About/About";
import Certificate from "../components/Certificate/Certificate";
import Products from "../components/Products/Products";
import Team from "../components/Team/Team";
import News from "../components/News/News";

export class Home extends Component {
  render() {
    return (
      <Layout>
        <Hero />
        <About />
        <Certificate />
        <Products />
        <Team />
        <News />
      </Layout>
    );
  }
}

export default Home;
