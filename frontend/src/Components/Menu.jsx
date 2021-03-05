import React from "react";
import { MenuListContext } from "../Contexts/MenuListContext";
import { useContext, useState } from "react";
import Nav from './Nav';

function Menu(props) {
    const { pizzavalue, burgervalue, othervalue } = useContext(MenuListContext);
    const [pizzas] = pizzavalue;
    const [burgers] = burgervalue;
    const [others] = othervalue;
    return(
        <MenuListContext.Consumer>
        {context => (
            
        <div className="Menu">
            <div className="tartalom">
                <div className="etlapDiv">
                    <div className="container">
                        {/* Pizzák */}

                        <h1 id="C1">Pizzák</h1>
                        <div className="row">
                            {pizzas.map((product, idx) => (
                            <div className="col-md-4 col-sm-6" key={idx}>
                                <div className="card text-center">
                                    <div className="card-block">
                                        <img src={ product.image } alt="Étel Kép" className="img-fluid"/>
                                        <div className="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} className="btn btn-success">Kosárba</button>
                                        {/* {context.addProductToCart.bind(this, product)} */}
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                        {/* Hamburgerek */}

                        <h1 id="C2">Hamburgerek</h1>
                        <div className="row">
                            {burgers.map((product, idx) => (
                            <div className="col-md-4 col-sm-6" key={idx}>
                                <div className="card text-center">
                                    <div className="card-block">
                                        <img src={ product.image } alt="Étel Kép" className="img-fluid"/>
                                        <div className="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} className="btn btn-success">Kosárba</button>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>

                        {/* Üdítők és köretek */}
                        <h1 id="C3">Üdítők és köretek</h1>
                        <div className="row">
                            {others.map((product, idx) => (
                            <div className="col-md-4 col-sm-6" key={idx}>
                                <div className="card text-center">
                                    <div className="card-block">
                                        <img src={ product.image } alt="Étel Kép" className="img-fluid"/>
                                        <div className="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div className="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} className="btn btn-success">Kosárba</button>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </MenuListContext.Consumer>
    );
}
export default (Menu);