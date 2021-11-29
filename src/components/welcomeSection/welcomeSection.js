import React from 'react';
import './welcomeSectionCss.css';
const WelcomeSection = () => {
    return (
        <section className={"welcomeSection"}>
            <h1>Snitcher</h1>
            <h2>The Coding Contest Notifier</h2>
            <div className={"scrollIndicator"} onClick={() => {

            }}>
                <i className="fas fa-chevron-down down-arrow"></i>
            </div>
        </section>
    );
};

export default WelcomeSection;
