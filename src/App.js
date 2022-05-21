import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

const LoginForm = React.lazy(() => import("./pages/login/login"));
const RegisterForm = React.lazy(() => import("./pages/register/register"));
const HomePage = React.lazy(() => import("./pages/home/home"));
const RatingForm = React.lazy(() => import("./pages/rating/rating"));

function App() {
  return (
      <BrowserRouter>
          <Route path="/login"><LoginForm/></Route>
          <Route path="/register"><RegisterForm/></Route>
          <Route path="/homepage"><HomePage/></Route>
          <Route path="/rating"><RatingForm/></Route>
      </BrowserRouter>
  );
}

export default App;
