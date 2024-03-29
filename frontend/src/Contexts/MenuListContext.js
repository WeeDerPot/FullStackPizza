import React,{ useState, createContext, useReducer } from "react";
import pizzakep from "../Images/pizza-2000615_1920.jpg";
import burgerkep from "../Images/pexels-valeria-boltneva-1251198 (1).jpg";
import uditokep from "../Images/pexels-alleksana-4113662.jpg";
import burgonyakep from "../Images/pexels-dzenina-lukac-1583884.jpg";

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./CartFunctions";

export const MenuListContext = createContext({
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: product => {}
});

export const MenuProvider = props => {
    const [pizzas] = useState([
        {
            image:  pizzakep,
            dishname: "Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        {
            image:  pizzakep,
            dishname: "Sonkás Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        {
            image:  pizzakep,
            dishname: "Szalámis Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        {
            image:  pizzakep,
            dishname: "Hawaii Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        {
            image:  pizzakep,
            dishname: "Marghareta Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        {
            image:  pizzakep,
            dishname: "Frutti di' mar Pizza",
            toppings: "Sajt Mozzarella",
            price: 1500,
        },
        
    ]);
    const [burgers] = useState([
        {
            image: burgerkep,
            dishname: "Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        {
            image: burgerkep,
            dishname: "Sajt Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        {
            image: burgerkep,
            dishname: "BBQ Bacon Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        {
            image: burgerkep,
            dishname: "Vega Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        {
            image: burgerkep,
            dishname: "Dupla Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        {
            image: burgerkep,
            dishname: "All-in Burger",
            toppings: "Sajt Husi",
            price: 1000,
        },
        
    ]);
    const [others] = useState([
        {
            image: burgonyakep,
            dishname: "Hasábburgonya",
            toppings: "Ketchup",
            price: 500,
        },
        {
            image: uditokep,
            dishname: "Cola",
            toppings: "250ml",
            price: 500,
        },
        {
            image: uditokep,
            dishname: "Fanta",
            toppings: "250ml",
            price: 500,
        },
        {
            image: uditokep,
            dishname: "Sprite",
            toppings: "250ml",
            price: 500,
        },
    ]);
    //const [cart, setCart] = useState([]);
    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

    const addProductToCart = (product) => {
        setTimeout(() => {
          //setCart(updatedCart);
          dispatch({ type: ADD_PRODUCT, product: product });
        }, 700);
    };

    const removeProductFromCart = (product) => {
        setTimeout(() => {
          //setCart(updatedCart);
          dispatch({ type: REMOVE_PRODUCT, product: product });
        }, 700);
    };

    return (
        <MenuListContext.Provider 
            value={{ 
                pizzavalue: [pizzas], 
                burgervalue: [burgers], 
                othervalue:[others], 
                cart:cartState.cart,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}
        >
            {props.children}
        </MenuListContext.Provider>
    );
}
