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
            <div class="tartalom">
                <div class="etlapDiv">
                    <div class="container">
                        {/* Pizzák */}

                        <h1 id="C1">Pizzák</h1>
                        <div class="row">
                            {pizzas.map(product => (
                            <div class="col-md-4 col-sm-6">
                                <div class="card text-center">
                                    <div class="card-block">
                                        <img src={ product.image } alt="Étel Kép" class="img-fluid"/>
                                        <div class="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} class="btn btn-success">Kosárba</button>
                                        {/* {context.addProductToCart.bind(this, product)} */}
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                        {/* Hamburgerek */}

                        <h1 id="C2">Hamburgerek</h1>
                        <div class="row">
                            {burgers.map(product => (
                            <div class="col-md-4 col-sm-6">
                                <div class="card text-center">
                                    <div class="card-block">
                                        <img src={ product.image } alt="Étel Kép" class="img-fluid"/>
                                        <div class="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} class="btn btn-success">Kosárba</button>
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>

                        {/* Üdítők és köretek */}
                        <h1 id="C3">Üdítők és köretek</h1>
                        <div class="row">
                            {others.map(product => (
                            <div class="col-md-4 col-sm-6">
                                <div class="card text-center">
                                    <div class="card-block">
                                        <img src={ product.image } alt="Étel Kép" class="img-fluid"/>
                                        <div class="card-title">
                                            <h5>{ product.dishname }</h5>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.toppings }</p>
                                        </div>
                                        <div class="card-text">
                                            <p>{ product.price }Ft.</p>
                                        </div>
                                        <button onClick={context.addProductToCart.bind(this, product)} class="btn btn-success">Kosárba</button>
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