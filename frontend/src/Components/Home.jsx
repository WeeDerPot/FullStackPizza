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
                <div class="container">
                    <div class="row">
                        <div class="col-md">
                        </div>
                        <div class="col-md-10">
                            <div id="slide" class="carousel slide slidediv" data-ride="carousel">

                                <ul class="carousel-indicators">
                                    <li data-target="#slide" data-slide-to="0" className="manual-btn active"></li>
                                    <li data-target="#slide" data-slide-to="1" className="manual-btn"></li>
                                    <li data-target="#slide" data-slide-to="2" className="manual-btn"></li>
                                    <li data-target="#slide" data-slide-to="3" className="manual-btn"></li>
                                </ul>

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img src={homeKep1} alt="homekep1" />
                                    </div>
                                    <div class="carousel-item">
                                    <img src={homeKep2} alt="homekep2" />
                                    </div>
                                    <div class="carousel-item">
                                    <img src={homeKep3} alt="homekep3" />
                                    </div>
                                    <div class="carousel-item">
                                    <img src={homeKep4} alt="homekep4" />
                                    </div>
                                </div>

                                <a class="carousel-control-prev" href="#slide" data-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </a>
                                <a class="carousel-control-next" href="#slide" data-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                        <div class="col-md">
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}
export default (Home);