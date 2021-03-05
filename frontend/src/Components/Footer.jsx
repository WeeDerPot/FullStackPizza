import React from "react";

function Footer(props) {
    return(
        <div className="Footer">
            <div class="mt-5 pt-2 pb-2 footer">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-5 col-md-4 col-xs-7 info">
                        <h5>Kövess minket közösségi médián!</h5>
                        <p><a href="#"><i class="fa fa-facebook-square mr-1 fa-2x"></i></a><a href="#"><i class="fa fa-instagram mr-1 fa-2x"></i></a><a href="#"><i class="fa fa-twitter-square mr-1 fa-2x"></i></a><a href="#"><i class="fa fa-google-plus-square fa-2x"></i></a></p>
                    </div>
                    <div class="col-lg-3 col-md-4 col-xs-0 links"></div>
                    <div class="col-lg-4 col-md-4 col-xs-7 links">
                        <h5 class="mt-lg-0 mt-sm-3">Links</h5>
                        <ul class="m-0 p-0">
                            <li><a href="#">Lorem ipsum</a></li>
                            <li><a href="#">Nam mauris velit</a></li>
                        </ul>
                    </div>
                    </div>
                    <div class="row mt-2">
                    <div class="col-lg-2 col-xs-2 copyright">
                        <p class=""><small class="text-50">© 2020. All Rights Reserved.</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (Footer);