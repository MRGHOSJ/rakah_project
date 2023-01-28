import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import SeoHead from "../components/SeoHead";
import { setup } from "../lib/csrf";

export default function Home() {
  return (
    <>
      <SeoHead title="Rakah Project | Home" />
      <Header location="home"/>
      <Hero />
      <Feature />
      <Pricing />
      <Footer />
    </>
  );
}

