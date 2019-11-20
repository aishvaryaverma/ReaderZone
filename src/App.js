import React, { Component } from 'react';
// components
import LeftNavigation from './components/layouts/LeftNavigation';
import ContentPanel from './components/layouts/ContentPanel';
// imported scss
import './static/scss/main.scss';

class App extends Component {
    state = {
        files: [],
        currentFile: ''
    }

    onInputChange = (name, format) => {
        const curFile = { name, format };
        const newFiles = [...this.state.files, curFile];
        this.setState({
            ...this.state,
            files: newFiles,
            currentFile: name
        }, () => {
            // USED FOR DEVELOPMENT PURPOSE
            // localStorage.setItem('files', JSON.stringify(this.state.files));
        });
    };

    updateCurFile = (cur) => {
        this.setState({ currentFile: cur });
    }

    // USED FOR DEVELOPMENT PURPOSE
    // componentDidMount() {
    //     if(this.state.files.length <= 0) {
    //         const persistFiles = JSON.parse(localStorage.getItem('files'));
    //         if(persistFiles) this.setState({ files: persistFiles });
    //     }
    // }

    render() {
        const { currentFile, files } = this.state;
        return (
            <div className="mainContainer">
                <LeftNavigation files={files} onInputChange={this.onInputChange} updateCurFile={this.updateCurFile} />
                <ContentPanel currentFile={currentFile} />
            </div>
        )
    }
}

export default App