import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';

import SignUp from '../Pages/SignUp';
import Choice from '../Pages/choiceUser';
import SignUpUser from '../Pages/SingUpUser/index';

const RouterApp = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/signup'element={<SignUp/>}/>
        <Route path="/choiceUser" element={ <Choice/> }/>
        <Route path='/signupUser' element={<SignUpUser/>} /> 
      </Routes>
    </Router>
  
  )
}

export default RouterApp;