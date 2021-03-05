import React, { useContext, useEffect } from 'react';
import { MenuListContext } from "../Contexts/MenuListContext";
import { UserContext } from '../Contexts/UserContext';

export default function Cart(props) {
    const context = useContext(MenuListContext);
    const userctx = useContext(UserContext);
    // const sumPrice = context.cart.reduce((a, c) => a + c.price * c.quantity);
    let sum = 0;
    context.cart.forEach(cartItem => {
        sum += cartItem.price * cartItem.quantity;
    });
    const SubmitOrder = () => {
        console.log("Felhasználó adatok: ",userctx.email, userctx.address, userctx.fullname, "Rendelt ételek: ", context.cart, "Végösszeg: ", sum);
        alert("Sikeres Rendelés!");
        window.location.href = "/";
    }
    return (
        <div className="Cart">
            <div class="tartalom">
                <div class="CartDiv">
                    <div class="container">
                    {context.cart.length <= 0 && <h4 class="emptyCart">A kosara üres!</h4>}
                    {context.cart.map(cartItem => (
                        <div class="row mt-2 mx-auto cartRow">
                            <div class="col">
                                <img class="cartKep" src={cartItem.image} alt={cartItem.dishname}/>
                            </div>
                            <div class="col">
                                <strong>{cartItem.dishname}</strong>
                            </div>
                            <div class="col">
                                {cartItem.price}Ft ({cartItem.quantity})
                            </div>
                            <div class="col">
                                {/* <input type="button" class="btn btn-custom mt-3 cartBtn" value="Törlés Kosárból!" onClick={context.removeProductFromCart.bind(this,cartItem)}/> */}
                                <button onClick={context.removeProductFromCart.bind(this, cartItem)} class="btn btn-custom mt-3 cartBtn">Törlés</button>
                            </div>
                        </div>
                    ))}
                    {context.cart.length > 0 && 
                        <div class="row mt-2 mx-auto finishRow">
                            <h5 class="osszegH">Összeg: {sum} Ft.</h5>
                            <input type="button" class="btn btn-custom mt-3 mx-auto FinishBtn" value="Rendelés Leadása!" onClick={SubmitOrder} />
                        </div>
                    }
                        
                    
                    </div>
                </div> 
            </div>
        </div>
    )
}
