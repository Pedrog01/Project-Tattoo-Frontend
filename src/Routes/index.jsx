import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';

import Choice from '../Pages/choiceUser';


const RouterApp = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/choiceUser" element={ <Choice/> }/>
      </Routes>
    </Router>
  
  )
}

export default RouterApp;