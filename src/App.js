import React from "react";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";

const App =() => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 ">
      <div className="container">
        <Header />
      </div>
    </nav>

    <div className="container">
      <Hero />
    </div>

    <div className="container">
      <section className=" p-4 ">
      <div className="row g-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </section>
    </div>

    <footer className="p-5 bg-dark text-white text-center position-relative">
      <Footer />
    </footer>
 
    
    </>
  );
}

export default App;
