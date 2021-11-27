import React from 'react';
import './contestCard.css';
import {getPlatformLogoUrl} from "../../utils/getPlatformLogo";
const ContestCard = (props) => {
    const {title, platform, startTime, endTime, date, link} = props;
    return (
        <div className={'col-lg-4 col-md-6 col-12'}>
            <div className={'contestCard'}>
                <div className={'imageWrapper'}>
                    <img src={getPlatformLogoUrl(platform).default} alt=""/>
                </div>
                <div className={'w-100'}>
                    <p>{title}</p>
                    <span className={'timeWrapper'}>
                        <span>{date}</span>
                        <span>{startTime} {endTime ? '-': null} {endTime}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContestCard;
