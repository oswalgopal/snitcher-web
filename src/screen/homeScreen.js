import React from 'react';
import ContestCard from "../components/contestCard/contestCard";
import {useDispatch, useSelector} from "react-redux";
import {getContestApiAction} from "../redux/actions/apiActions";
import WelcomeSection from "../components/welcomeSection/welcomeSection";
// import SearchBar from "../components/searchBar/SearchBar";
import FooterComponent from "../components/footer/FooterComponent";
import './homeScreen.css';
import HeadingText from "../components/headingText/headingText";
import $ from 'jquery';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const {all} = useSelector(state => state.contestReducer);
    React.useEffect(() => {
        dispatch(getContestApiAction());
    }, []);
    // $(document).ready(function() {
    //     // declare variable
    //     var scrollTop = $(".scrollTop");
    //
    //     $(window).scroll(function () {
    //         // declare variable
    //         var topPos = $(this).scrollTop();
    //
    //         // if user scrolls down - show scroll to top button
    //         if (topPos > 100) {
    //             $(scrollTop).css("opacity", "1");
    //             $('#myheader').attr('style', 'background-color: #00091b !important; z-index: 1000000');
    //         } else {
    //             $(scrollTop).css("opacity", "0");
    //             $('#myheader').attr('style', 'background-color: transparent !important; z-index: 1000000');
    //         }
    //
    //     }); // scroll END
    //
    //     //Click event to scroll to top
    //     $(scrollTop).on('click', function () {
    //         $('html, body').animate({
    //             scrollTop: 0
    //         }, 800);
    //         return false;
    //     });
    // });
    return (
        <React.Fragment>
            {/*<Header />*/}
            <WelcomeSection/>
            <section id={"home"}>
                <div className="homeContainer">
                    <HeadingText text={"Upcoming Coding Contest"}/>
                    {/*<SearchBar />*/}
                    <div className="row">
                        {
                            all.map((item, index) => (
                                <React.Fragment key={index}>
                                    {
                                        index % 2 !== 0 && (
                                            <div data-aos="fade-up" className={'col-lg-6 col-md-12 col-12'}/>
                                        )
                                    }
                                    <ContestCard
                                        index={index}
                                        key={index}
                                        title={item.title}
                                        platform={item.platform}
                                        startTime={item.start_time}
                                        endTime={item.end_time}
                                        link={item.link}
                                        date={item.date}
                                    />
                                    {
                                        index % 2 === 0 && (
                                            <div data-aos="fade-up" className={'col-lg-6 col-md-12 col-12'}/>
                                        )
                                    }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
                {/*<div className={"scrollTop scrollToTop"}>*/}
                {/*    <i className="fas fa-chevron-up"></i>*/}
                {/*</div>*/}
            </section>
            <FooterComponent/>
        </React.Fragment>
    );
};

export default HomeScreen;
