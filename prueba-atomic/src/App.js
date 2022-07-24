import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Main from "./containers/Main";
import Login from "./containers/login"


const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/login", element: <Login /> }
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
