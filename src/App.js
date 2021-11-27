import React from 'react';
import {store} from "./redux/store/store";
import {Provider} from "react-redux";
import HomeScreen from "./redux/screen/homeScreen";

const App = () => {
    return (
        <Provider store={store}>
          <HomeScreen />
        </Provider>
    );
};

export default App;
