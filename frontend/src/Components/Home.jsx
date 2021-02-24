import React, { useContext } from "react";
import homeKep1 from "../Images/pizza-1344720_1920.jpg";
import homeKep2 from "../Images/pizza-2000615_1920.jpg";
import homeKep3 from "../Images/pizza-3007395_1920.jpg";
import homeKep4 from "../Images/pizza-711670_1920.jpg";
import { UserContext } from '../Contexts/UserContext';

function Home() {
    // LOG User
    //const userctx = useContext(UserContext);
    //console.log(userctx);

    // Auto Slide
    var counter = 1;
    setInterval(function(){
      document.getElementById('slideRadio' + counter).checked = true;
      counter++;
        if (counter > 4) {
          counter = 1;
        }
      }, 5000);
    return(
        <div className="Home">
            <div class="tartalom">
                <div class="slider-div">
                    <div class="slider">
                        <div class="slides">
                            <input type="radio" name="radio-btn" id="slideRadio1"/>
                            <input type="radio" name="radio-btn" id="slideRadio2"/>
                            <input type="radio" name="radio-btn" id="slideRadio3"/>
                            <input type="radio" name="radio-btn" id="slideRadio4"/>
                    
                            <div class="slide first">
                                <img src={homeKep1} alt=""/>
                            </div>
                            <div class="slide">
                                <img src={homeKep2} alt=""/>
                            </div>
                            <div class="slide">
                                <img src={homeKep3} alt=""/>
                            </div>
                            <div class="slide">
                                <img src={homeKep4} alt=""/>
                            </div>
                    
                            <div class="auto-nav">
                                <div class="auto-btn1"></div>
                                <div class="auto-btn2"></div>
                                <div class="auto-btn3"></div>
                                <div class="auto-btn4"></div>
                            </div>
                        </div>
                        <div class="manual-nav">
                            <label for="slideRadio1" class="manual-btn"></label>
                            <label for="slideRadio2" class="manual-btn"></label>
                            <label for="slideRadio3" class="manual-btn"></label>
                            <label for="slideRadio4" class="manual-btn"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}
export default (Home);