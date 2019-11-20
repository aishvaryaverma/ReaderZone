import React, { Component } from 'react';
// components
import LeftNavigation from './components/layouts/LeftNavigation';
import ContentPanel from './components/layouts/ContentPanel';
// imported scss
import './static/scss/main.scss';

class App extends Component {
    state = {
        files: [],
        curIndex: 0
    }

    onInputChange = (name, format, data) => {
        const curFile = { name, format, data };
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

    updateIndex = (index) => {
        console.log(index);
        this.setState({ curIndex: index });
    }

    updateFileData = data => {
        const newData = [...this.state.filesData, data];
        this.setState({ filesData: newData });
    }

    // USED FOR DEVELOPMENT PURPOSE
    // componentDidMount() {
    //     if(this.state.files.length <= 0) {
    //         const persistFiles = JSON.parse(localStorage.getItem('files'));
    //         if(persistFiles) this.setState({ files: persistFiles });
    //     }
    // }

    render() {
        const { curIndex, files } = this.state;
        return (
            <div className="mainContainer">
                <LeftNavigation
                    files={files}
                    index={curIndex}
                    onInputChange={this.onInputChange}
                    updateIndex={this.updateIndex}
                />
                <ContentPanel
                    files={files}
                    index={curIndex}
                />
            </div>
        )
    }
}

export default App