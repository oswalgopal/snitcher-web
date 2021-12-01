import React from 'react';
import './footerComponentCss.css';
import $ from 'jquery';

const FooterComponent = () => {
    // $( document ).ready( function(  ) {
        $('#bootstrapForm').submit(function (event) {
            event.preventDefault()
            var extraData = {};
            $('#bootstrapForm').ajaxSubmit({
                data: extraData,
                dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                error: function () {
                    // Submit of form should be successful but JSONP callback will fail because Google Forms
                    // does not support it, so this is handled as a failure.
                    alert('Form Submitted. Thanks.')
                    // You can also redirect the user to a custom thank-you page:
                    // window.location = 'http://www.mydomain.com/thankyoupage.html'
                }
            })
        })
    // });
    return (
        <footer>
            <h3 className={"footerHeading"}>
                get it
            </h3>
            <div>
                <button>View on Github</button>
            </div>
            <hr/>
            <h3 className={"footerHeading"}>
                Report a Bug
            </h3>
            <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSe1kqB7Ujem8TDJOtKFv7MiyJQhrHhUk8Zm0DrlMq8U7UDAnQ/formResponse"
                target="_self"
                id="bootstrapForm"
                method="POST">
                <fieldset>
                    {/*<h2>*/}
                        {/*Untitled form<br/><small></small>*/}
                    {/*</h2>*/}
                </fieldset>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <fieldset>
                            <legend htmlFor="433727979"></legend>
                            <div className="form-group">
                                <input id="1199771978" type="email" name="entry.1199771978" className="form-control" required placeholder={"Email"}/>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col-lg-6 col-12">
                        <fieldset>
                            <legend htmlFor="583216171"></legend>
                            <div className="form-group">
                                <input id="1279151668" type="text" name="entry.1279151668" className="form-control" required placeholder={"Name"}/>
                            </div>
                        </fieldset>
                    </div>
                </div>


                <fieldset>
                    <legend htmlFor="590635024"></legend>
                    <div className="form-group">
                        <textarea id="174597640" name="entry.174597640" className="form-control" required
                                  placeholder={"Write bug here ... "}
                        ></textarea>
                    </div>
                </fieldset>

                    <input type="hidden" name="fvv" value="1" />
                    <input type="hidden" name="fbzx" value="-1812538668898019901"/>
                    <input type="hidden" name="pageHistory" value="0"/>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
            </form>
            <hr/>
            <h3 className={"footerHeading"}>
                about developers
            </h3>
            <p className="text">
                Gopal Oswal
                <span> (Full stack Development) </span>
                {/*<a href="http://oswalgopal.github.io/">oswalgopal.github.io</a>*/}
            </p>
            <p className="text">
                Janvi Chouhan
                <span>
                    (Frontend Development)
                </span>
            </p>
            <hr/>
        </footer>
);
};

export default FooterComponent;
