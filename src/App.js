import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Helmet>
                        <title>Gregory Noethlich</title>
                        <meta name="description" content="Gregory Noethlich" />
                    </Helmet>
                    <Main />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;