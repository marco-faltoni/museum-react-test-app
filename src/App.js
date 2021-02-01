import React from 'react';
// import Context
import {ActivityProvider} from './dataContext';
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// import styles
import "./style/app.scss";
//Import Pages
import Home from "./pages/Home";

//Animation
import { AnimatePresence } from "framer-motion";



function App() {

  const location = useLocation();


  return (
    <div className="App">
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
        <ActivityProvider>
          <Home/>
        </ActivityProvider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
