import React, { useContext } from "react";
import aboutKep from "../Images/pexels-martin-péchy-1028225.jpg";

function About(props) {
    return(
        <div className="About">
            <div class="tartalom">
                <div class="container">
                    <div class="row mt-5 justify-content-around">
                        <div class="col-md-12 col-lg-5 text-justify" id="tortenet">
                            <h3>Pizzázónk története</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum purus sit amet ante faucibus, ac dictum nunc scelerisque. Pellentesque turpis quam, convallis at dui vitae, aliquet sollicitudin augue. Fusce sagittis felis justo. Quisque ultricies, dolor ut feugiat eleifend, leo augue fringilla tellus, ut porttitor libero purus a risus. Nam et libero quam. Nulla ipsum odio, efficitur quis odio sit amet, porttitor semper tellus. Nullam mollis tristique ipsum ut bibendum. Nam tincidunt interdum erat, ac ultricies lectus iaculis ac. Curabitur hendrerit, dolor in rhoncus vestibulum, metus lacus vulputate velit, sed malesuada mi elit ut mi. Cras eu mauris elit.
                            Suspendisse sit amet purus auctor, porta mi ultricies, tempor quam. Etiam mollis urna pharetra scelerisque posuere. Cras quis quam vehicula augue commodo lacinia eu sit amet dui. Nunc vehicula mauris nunc, non dictum leo commodo at. Donec auctor enim ut lectus aliquet, quis tincidunt urna maximus. Etiam dictum condimentum massa, pulvinar elementum justo posuere in. Etiam consectetur laoreet arcu vel lacinia. Suspendisse potenti. Phasellus quis magna in lorem pulvinar consectetur eu sed nisl.</p>
                        </div>
                        <div class="col-md-12 col-lg-5">
                            <img src={aboutKep} alt="Étterem" id="etteremkep"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (About);