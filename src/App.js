import React, { Component } from 'react';
// components
import LeftNavigation from './components/layouts/LeftNavigation';
import ContentPanel from './components/layouts/ContentPanel';
// imported scss
import './static/scss/main.scss';

class App extends Component {
    render() {
        return (
            <div className="mainContainer">
                <LeftNavigation />
                <ContentPanel />
            </div>
        )
    }
}

export default App