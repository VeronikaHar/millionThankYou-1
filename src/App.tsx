import React from 'react';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, BrowserRouter as Router} from 'react-router-dom'
import AboutUs from "./components/AboutUs/AboutUs";
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";

function App() {
    return (
        <div>
            <header className="App-header">
                <AppHeader/>
            </header>
            <div>
            <Router>
                <div className="mx-3">
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/aboutUs" component={AboutUs}/>
                </div>
            </Router>
            </div>
            <div className={'footer'}>
                <AppFooter />
            </div>
        </div>
    );
}

export default App;
