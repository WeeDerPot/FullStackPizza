import React from "react";

function Footer(props) {
    return(
        <div className="Footer">
            <div className="mt-5 pt-2 pb-2 footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-5 col-md-4 col-xs-7 info">
                        <h5>Kövess minket közösségi médián!</h5>
                        <p><a href="#"><i className="fa fa-facebook-square mr-1 fa-2x"></i></a><a href="#"><i className="fa fa-instagram mr-1 fa-2x"></i></a><a href="#"><i className="fa fa-twitter-square mr-1 fa-2x"></i></a><a href="#"><i className="fa fa-google-plus-square fa-2x"></i></a></p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-xs-0 links"></div>
                    <div className="col-lg-4 col-md-4 col-xs-7 links">
                        <h5 className="mt-lg-0 mt-sm-3">Links</h5>
                        <ul className="m-0 p-0">
                            <li><a href="#">Lorem ipsum</a></li>
                            <li><a href="#">Nam mauris velit</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="row mt-2">
                    <div className="col-lg-2 col-xs-2 copyright">
                        <p className=""><small className="text-50">© 2020. All Rights Reserved.</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (Footer);