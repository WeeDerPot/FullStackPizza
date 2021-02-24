import React from "react";
import { MenuListContext } from "../Contexts/MenuListContext";
import MenuList from "../Contexts/MenuList";
import { useContext, useState } from "react";

function Menu() {
    const { pizzavalue, burgervalue, othervalue } = useContext(MenuListContext);
    const [pizzas] = pizzavalue;
    const [burgers] = burgervalue;
    const [others] = othervalue;
    return(
        <div className="Menu">
            <div class="tartalom">
                <div class="etlapDiv">
                    <div class="container">
                        {/* Pizzák */}

                        <h1 id="C1">Pizzák</h1>
                        <div class="row">
                            {pizzas.map(pizza => (
                                <MenuList dishname={ pizza.dishname } image={ pizza.image } toppings={ pizza.toppings } price={ pizza.price } />
                            ))};
                        </div>
                        {/* Hamburgerek */}

                        <h1 id="C2">Hamburgerek</h1>
                        <div class="row">
                            {burgers.map(burger => (
                                <MenuList dishname={ burger.dishname } image={ burger.image } toppings={ burger.toppings } price={ burger.price } />
                            ))};
                        </div>

                        {/* Üdítők és köretek */}
                        <h1 id="C3">Üdítők és köretek</h1>
                        <div class="row">
                            {others.map(other => (
                                <MenuList dishname={ other.dishname } image={ other.image } toppings={ other.toppings } price={ other.price } />
                            ))};
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (Menu);