import React from 'react';
import Header from "../../components/header/header";
import ContestCard from "../../components/contestCard/contestCard";
import {useDispatch, useSelector} from "react-redux";
import {getContestApiAction} from "../actions/apiActions";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const {all} = useSelector(state => state.contestReducer);
    React.useEffect(() => {
        dispatch(getContestApiAction());
    }, []);
    return (
        <React.Fragment>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    {
                        all.map((item, index) => (
                            <ContestCard
                                title={item.title}
                                platform={item.platform}
                                startTime={item.start_time}
                                endTime={item.end_time}
                                link={item.link}
                                date={item.date}
                            />
                        ))
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeScreen;
