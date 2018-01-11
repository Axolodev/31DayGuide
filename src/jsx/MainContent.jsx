import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import DayContent from "./DayContent";

const MainContent = ({}) => (
  <div className="MainContent">
    <Switch>
      <Route path="/day/:day" component={DayContent}></Route>
    </Switch>
  </div>
);

export default MainContent;
