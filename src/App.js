import React from "react";
import {Route} from 'react-router-dom';

import LandingPage from './landingPage/landingPage';


const App = () => {
  return (
    <div>
        <Route exact path='/' render={LandingPage} />
    </div>
  );
};

export default App;
