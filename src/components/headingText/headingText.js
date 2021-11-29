import React from 'react';
import './headingText.css';
const HeadingText = (props) => {
    const {text} = props;
    return (
        <div className={'headingText'}>
            <h2>{text}</h2>
        </div>
    );
};

export default HeadingText;
