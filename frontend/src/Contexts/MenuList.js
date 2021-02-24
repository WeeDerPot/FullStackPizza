import React from "react";

const MenuList = ({ image, dishname, toppings, price }) => {
    return (
        <div class="col-md-4 col-sm-6">
            <div class="card text-center">
                <div class="card-block">
                    <img src={ image } alt="Étel Kép" class="img-fluid"/>
                    <div class="card-title">
                        <h5>{ dishname }</h5>
                    </div>
                    <div class="card-text">
                        <p>{ toppings }</p>
                    </div>
                    <div class="card-text">
                        <p>{ price }Ft.</p>
                    </div>
                    <button type="button" class="btn btn-success">Megrendelés</button>
                </div>
            </div>
        </div>
    );
};

export default MenuList;