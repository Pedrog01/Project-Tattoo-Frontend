import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';

import SignUp from '../Pages/SignUp';

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup'element={<SignUp/>}/>
      </Routes>
    </Router>
  )
}

export default RouterApp;


