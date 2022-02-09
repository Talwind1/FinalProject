import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dresses from "../src/components/dresses/Dresses";
import Header from "../src/components/navbar/Header";
import MyItems from "../src/components/userItems/MyItems";
import Home from "../src/components/home/Home";
import Wishlist from "../src/components/wishlist/Wishlist";
import SignIn from "./components/SignIn";
import Login from "./components/google login/Login";
import Dress from "../src/components/dresses/Dress";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dresses">
              <Dresses />
            </Route>
            <Route path="/my-items">
              <MyItems />
            </Route>
            <Route path="/dress/:id" exact component={Dress} />
            <Route path="/signin" exact component={SignIn} />{" "}
            <Route path="/login" exact component={Login} />
            <Route path="/wishlist">
              <Wishlist />
            </Route>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
