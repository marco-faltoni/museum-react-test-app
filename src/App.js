import React from 'react';
// import Context
import {ActivityProvider, ClickedProvider} from './dataContext';
//Router
import { Route } from "react-router-dom";
// import styles
import "./style/app.scss";
//Import Pages
import Home from "./pages/Home";



function App() {

  return (
    <div className="App">
        <Route path={['/exhibition/:id', '/']}>
          <ActivityProvider>
            <ClickedProvider>
              <Home/>
            </ClickedProvider>
          </ActivityProvider>
        </Route>
    </div>
  );
}

export default App;
