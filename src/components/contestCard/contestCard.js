import React from 'react';
import './contestCard.css';
import {getPlatformLogoUrl} from "../../utils/getPlatformLogo";
import {platformName} from "../../utils/platformNames";
const ContestCard = (props) => {
    const {title, platform, startTime, endTime, date, link} = props;
    return (
        <div data-aos="zoom-in-up" className={'col-lg-6 col-md-12 col-12'}>
            <div className={'contestCard'} onClick={() => {
                window.open(link, '_blank')
            }}>
                <div className={'imageWrapper'}>
                    <img src={getPlatformLogoUrl(platform).default} alt=""/>
                </div>
                <div className={'w-100'}>
                    <p>{title}</p>
                    <span className={'timeWrapper'}>
                        <span>{date}</span>
                        {
                            date === "OnGoing" ? (
                                <span className={"live_text"}>Live</span>
                            ) : (
                                <React.Fragment>
                                    {
                                        platform === platformName.codeChef ? (
                                            <span>{startTime} {endTime ? '-': null} {endTime}</span>
                                        ) : (
                                            <span>{new Date(startTime).toLocaleTimeString()} {endTime ? '-': null} {new Date(endTime).toLocaleTimeString()}</span>
                                        )
                                    }
                                </React.Fragment>
                            )
                        }

                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContestCard;
