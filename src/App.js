import React from "react";
import {Route} from 'react-router-dom';

import PublicLandingPage from './landingPage/PublicLandingPage';


const App = () => {
  return (
    <div>
        <Route exact path='/' render={PublicLandingPage} />
    </div>
  );
};

export default App;
