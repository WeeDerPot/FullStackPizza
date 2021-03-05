import React from "react";
import homeKep1 from "../Images/pizza-1344720_1920.jpg";
import homeKep2 from "../Images/pizza-2000615_1920.jpg";
import homeKep3 from "../Images/pizza-3007395_1920.jpg";
import homeKep4 from "../Images/pizza-711670_1920.jpg";

function Home(props) {
    // LOG User
    //const userctx = useContext(UserContext);
    //console.log(userctx);

    // Auto Slide
    //  var counter = 1;
    //  setInterval(function(){
    //    document.getElementById('slideRadio' + counter).checked = true;
    //    counter++;
    //      if (counter > 4) {
    //         counter = 1;
    //     }
    // }, 5000);
    return(
        <div className="Home">
            <div className="tartalom">
                <div className="slider-div">
                    <div className="slider">
                        <div className="slides">
                            <input type="radio" name="radio-btn" id="slideRadio1"/>
                            <input type="radio" name="radio-btn" id="slideRadio2"/>
                            <input type="radio" name="radio-btn" id="slideRadio3"/>
                            <input type="radio" name="radio-btn" id="slideRadio4"/>
                    
                            <div className="slide first">
                                <img src={homeKep1} alt=""/>
                            </div>
                            <div className="slide">
                                <img src={homeKep2} alt=""/>
                            </div>
                            <div className="slide">
                                <img src={homeKep3} alt=""/>
                            </div>
                            <div className="slide">
                                <img src={homeKep4} alt=""/>
                            </div>
                    
                            <div className="auto-nav">
                                <div className="auto-btn1"></div>
                                <div className="auto-btn2"></div>
                                <div className="auto-btn3"></div>
                                <div className="auto-btn4"></div>
                            </div>
                        </div>
                        <div className="manual-nav">
                            <label htmlFor="slideRadio1" className="manual-btn"></label>
                            <label htmlFor="slideRadio2" className="manual-btn"></label>
                            <label htmlFor="slideRadio3" className="manual-btn"></label>
                            <label htmlFor="slideRadio4" className="manual-btn"></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}
export default (Home);