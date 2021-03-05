import React, { createContext, useContext, useState, useEffect }from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Footer, About, Contact, Home, Menu, Registration, Admin, Cart, Profile } from "./Components";
import "./style.css";
import { MenuProvider, MenuListContext } from './Contexts/MenuListContext';
import UserContextProvider from './Contexts/UserContext';
import { UserContext } from './Contexts/UserContext';

function App() {
  const userctx = useContext(UserContext);
  const context = useContext(MenuListContext);

  return (
    <div className="App">
      <BrowserRouter>
      {/* <MenuProvider> */}
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
      {/* </MenuProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
