import React from 'react';
import './welcomeSectionCss.css';
import $ from 'jquery';
const WelcomeSection = () => {
    return (
        <section className={"welcomeSection"}>
            <h1>Snitcher</h1>
            <h2>The Coding Contest Notifier</h2>
            <div className={"scrollIndicator"} onClick={() => {
                $('html, body').animate({
                    scrollTop: $('#home').offset().top
                }, 1000);
            }}>
                <i className="fas fa-chevron-down down-arrow"></i>
            </div>
        </section>
    );
};

export default WelcomeSection;
