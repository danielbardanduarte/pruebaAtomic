import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./containers/Main";


const RoutePath = () => (
    <div>
        <Route>
            <Routes exact path="/" component={Main} />
        </Route>
    </div>
);

export default RoutePath;
