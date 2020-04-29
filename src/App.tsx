import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div className="mx-3">
      <header className="App-header">
      </header>
        <Router>
            <div>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/aboutUs" component={AboutUs} />
            </div>
        </Router>
    </div>
  );
}

export default App;
