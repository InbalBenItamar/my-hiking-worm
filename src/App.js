import React from "react";
import ReactDOM from "react-dom";
import {Route} from 'react-router-dom';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #581845;
`;

const Text = styled.p`
  font-size: 22px;
  text-align: center;
  color: #C70039;
`;

const LandingPage = () =>
        <div>
            <Title>Hello Git</Title>
            <Text>I'm a styled component!</Text>
        </div>
;

const App = () => {
  return (
    <div>
        <Route exact path='/' render={LandingPage} />
    </div>
  );
};

export default App;
