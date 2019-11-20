import React from 'react';
import { ReactComponent as DocumentIcon } from '../../static/img/document-icon.svg';
import { ReactComponent as Close } from '../../static/img/close_black.svg';

const ContentPanel = ({ currentFile }) => {
    return (
        <div className="mainContainer__right">
            <div className="mobilePanel" onClick={() => {
                document.querySelector('.mainContainer__right').classList.remove('showMobile');
            }}>
                <Close />
            </div>
            <div className="documentHeading">
                <DocumentIcon />
                <h2>{currentFile ? currentFile : 'No Document'}</h2>
            </div>

            <div className="viewerFrame"></div>
        </div>
    )
}

export default ContentPanel
