import React from "react";
import homeKep1 from "../Images/pizza-1344720_1920.jpg";
import homeKep2 from "../Images/pizza-2000615_1920.jpg";
import homeKep3 from "../Images/pizza-3007395_1920.jpg";
import homeKep4 from "../Images/pizza-711670_1920.jpg";

function Home(props) {
    return(
        <div className="Home">
            <div className="tartalom">
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                        </div>
                        <div className="col-md-10">
                            <div id="slide" className="carousel slide slidediv" data-ride="carousel">

                                <ul className="carousel-indicators">
                                    <li data-target="#slide" data-slide-to="0" className="manual-btn active"></li>
                                    <li data-target="#slide" data-slide-to="1" className="manual-btn"></li>
                                    <li data-target="#slide" data-slide-to="2" className="manual-btn"></li>
                                    <li data-target="#slide" data-slide-to="3" className="manual-btn"></li>
                                </ul>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <img src={homeKep1} alt="homekep1" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={homeKep2} alt="homekep2" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={homeKep3} alt="homekep3" />
                                    </div>
                                    <div className="carousel-item">
                                    <img src={homeKep4} alt="homekep4" />
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#slide" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#slide" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md">
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    );
}
export default (Home);