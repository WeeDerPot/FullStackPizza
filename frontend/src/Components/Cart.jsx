import React, { useContext } from 'react';
import { MenuListContext } from "../Contexts/MenuListContext";
import { UserContext } from '../Contexts/UserContext';

export default function Cart(props) {
    const context = useContext(MenuListContext);
    const userctx = useContext(UserContext);
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
            <div className="tartalom">
                <div className="CartDiv">
                    <div className="container">
                    {context.cart.length <= 0 && <h4 className="emptyCart">A kosara üres!</h4>}
                    {context.cart.map((cartItem, idx) => (
                        <div className="row mt-2 mx-auto cartRow" key={idx}>
                            <div className="col">
                                <img className="cartKep" src={cartItem.image} alt={cartItem.dishname}/>
                            </div>
                            <div className="col">
                                <strong>{cartItem.dishname}</strong>
                            </div>
                            <div className="col">
                                {cartItem.price}Ft ({cartItem.quantity})
                            </div>
                            <div className="col">
                                {/* <input type="button" className="btn btn-custom mt-3 cartBtn" value="Törlés Kosárból!" onClick={context.removeProductFromCart.bind(this,cartItem)}/> */}
                                <button onClick={context.removeProductFromCart.bind(this, cartItem)} className="btn btn-custom mt-3 cartBtn">Törlés</button>
                            </div>
                        </div>
                    ))}
                    {context.cart.length > 0 && 
                        <div className="row mt-2 mx-auto finishRow">
                            <h5 className="osszegH">Összeg: {sum} Ft.</h5>
                            <input type="button" className="btn btn-custom mt-3 mx-auto FinishBtn" value="Rendelés Leadása!" onClick={SubmitOrder} />
                        </div>
                    }
                        
                    
                    </div>
                </div> 
            </div>
        </div>
    )
}
