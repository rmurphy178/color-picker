import React from 'react';
import { Route } from 'react-router-dom';
import ColorsContainer from './main/colors_container';

const App = () => (
    <div>
      <Route exact path="/" component={ColorsContainer} />
    </div>
);

export default App;
