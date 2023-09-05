import React, { Component } from "react";
import { Button, BackTop } from "uiw";
import Layout from "../components/Layout/Layout";
import Hero from "../components/HeroSection/Hero";
import About from "../components/About/About";
import Certificate from "../components/Certificate/Certificate";
import Products from "../components/Products/Products";
import Team from "../components/Team/Team";
import News from "../components/News/News";
import Backtop from "../components/Backtop/Backtop";
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
        <BackTop fixed={true} step={100} clickable={false} speed={20}>
          {({ percent, scrollToTop }) => (
            <Button onClick={() => scrollToTop()}>
              <Backtop />
            </Button>
          )}
        </BackTop>
      </Layout>
    );
  }
}

export default Home;
