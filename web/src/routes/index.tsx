import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Route from './Route';


export default function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/menu" component={TeacherList} />
      <Route path="/add" component={TeacherForm} />
    </BrowserRouter>
  );
}