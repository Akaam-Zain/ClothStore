import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Prodcuts";
import product from "./components/Products/Product/product";
import viewProduct from "./components/Products/viewProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={product} />
          <Route path="/viewproduct/:productId" component={viewProduct} />
          <Route> 404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
