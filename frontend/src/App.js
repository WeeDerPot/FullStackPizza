import React, { useContext }from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, About, Contact, Home, Menu, Registration, Admin, Cart, Profile } from "./Components";
import "./style.css";
import { UserContext } from './Contexts/UserContext';

function App() {
  const userctx = useContext(UserContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Nav />
          <Switch>
            <Route path="/" exact component={() => <Home /> } />
            <Route path="/about" exact component={() => <About/> } />
            <Route path="/contact" exact component={() => <Contact/> } />
            <Route path="/menu" exact component={() => <Menu/> } />
            {
              userctx ? (
                <>
                  {userctx.isAdmin ? <Route path="/admin" exact component={() => <Admin/> } /> : null}
                  <Route path="/cart" exact component={() => <Cart /> } />
                  <Route path="/profile" exact component={() => <Profile/> } />
                </>
              ) : (
                <>
                  <Route path="/registration" exact component={() => <Registration/> } />
                </>
                )
            }
          </Switch>
          <Footer/>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
