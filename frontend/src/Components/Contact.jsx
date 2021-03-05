import React, { useContext } from "react";

/* width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" */
/* style={{ width="100%", height="100%", frameborder="0", style="border:0;", allowfullscreen="", ariaHidden="false", tabindex="0" }} */
/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.0759892733739!2d20.17209429719288!3d46.271468034551916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1606847086991!5m2!1shu!2shu"></iframe> */

function Contact(props) {
        const mystyle = {
            width: "100%",
            height: "100%",
            frameborder: "0",
            style: "border:0;",
            allowfullscreen: "",
            ariaHidden: "false",
            tabindex: "0",
            border: "0"
        }
    return(
        <div className="Contact">
            <div className="tartalom">
                <div className="container">
                    <div className="contactdiv">
                        <div className="row mt-5">
                            <div className="col-12 col-lg-8">
                                <div className="mapCanvas">
                                <iframe title="térkép" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d975.0759892733739!2d20.17209429719288!3d46.271468034551916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shu!2shu!4v1606847086991!5m2!1shu!2shu" style={mystyle} ></iframe>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h4>Elérhetőségeink</h4>
                                <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
                                <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
                                <p><i className="fa fa-envelope-o mr-3"></i>info@pizza.com</p>
                                <h4>Szállítási költség</h4>
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td>Zöld zóna:</td>
                                            <td>Ingyenes</td>
                                        </tr>
                                        <tr>
                                            <td>Sárga zóna:</td>
                                            <td>300Ft</td>
                                        </tr>
                                        <tr>
                                            <td>Piros zóna:</td>
                                            <td>500Ft</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default (Contact);