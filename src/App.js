import React, { Component } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageConTainer from "./containers/MessageConTainer";

class App extends Component {
  render() {
    return (
      <div>
         <Header />
         
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            
            <MessageConTainer />
            
            <CartContainer />
          </div>
        </main>

          <Footer />
      </div>
    );
  }
}

export default App;
