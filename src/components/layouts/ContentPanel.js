import React, { useState, useEffect } from 'react';
import { ReactComponent as DocumentIcon } from '../../static/img/document-icon.svg';
import { ReactComponent as Close } from '../../static/img/close_black.svg';

const ContentPanel = ({ files, index }) => {
    const [name, setName] = useState('No Document');
    const [source, setSource] = useState('');

    useEffect(() => {
        if(files.length) {
            setName(files[index].name);
            setSource(files[index].data);
        }
    }, [index, files]);

    return (
        <div className="mainContainer__right">
            <div className="mobilePanel" onClick={() => {
                document.querySelector('.mainContainer__right').classList.remove('showMobile');
            }}>
                <Close />
            </div>
            <div className="documentHeading">
                <DocumentIcon />
                <h2>{name}</h2>
            </div>

            <div className="viewerFrame">
                <iframe title="Viewer" src={source} id="viewIframe" frameBorder="0"></iframe>
            </div>
        </div>
    )
}

export default ContentPanel
