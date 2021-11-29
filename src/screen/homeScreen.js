import React from 'react';
import ContestCard from "../components/contestCard/contestCard";
import {useDispatch, useSelector} from "react-redux";
import {getContestApiAction} from "../redux/actions/apiActions";
import WelcomeSection from "../components/welcomeSection/welcomeSection";
// import SearchBar from "../components/searchBar/SearchBar";
import FooterComponent from "../components/footer/FooterComponent";
import './homeScreen.css';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const {all} = useSelector(state => state.contestReducer);
    React.useEffect(() => {
        dispatch(getContestApiAction());
    }, []);
    return (
        <React.Fragment>
            {/*<Header />*/}
            <WelcomeSection/>
            <section id={"home"}>
                <div className="container-fluid mt-5">
                    {/*<SearchBar />*/}
                    <div className="row">
                        {
                            all.map((item, index) => (
                                <React.Fragment>
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
            </section>
            <FooterComponent/>
        </React.Fragment>
    );
};

export default HomeScreen;
