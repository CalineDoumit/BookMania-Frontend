import logo from './logo.svg';
import './App.css';
import React from 'react';
import {HashRouter, BrowserRouter,Redirect, Route, Switch} from "react-router-dom";

const LoginForm = React.lazy(() => import("./pages/login/login"));
const RegisterForm = React.lazy(() => import("./pages/register/register"));

function App() {
  return (
      <BrowserRouter>
          <Route path="/login"><LoginForm/></Route>
          <Route path="/register"><RegisterForm/></Route>
      </BrowserRouter>
  );
}

export default App;
