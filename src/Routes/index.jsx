import React from 'react';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';

import SignIn from '../Pages/signIn';
import Choice from '../Pages/choiceUser';
import SignUp from '../Pages/singUp';
import HomePage from '../Pages/HomePage/index'
import PasswordRecuperation from '../Pages/passwordRecuperation';
import Jobs from '../Pages/jobs/index'

const RouterApp = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin'element={<SignIn/>}/>
        <Route path="/choiceUser" element={ <Choice/> }/>
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/passwordRecuperation' element={<PasswordRecuperation/>} />
        <Route path='/jobs' element={<Jobs/>} />
      </Routes>
    </Router>
  
  )
}

export default RouterApp;