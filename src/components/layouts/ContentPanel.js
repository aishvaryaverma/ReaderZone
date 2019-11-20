import React from 'react';
import { ReactComponent as DocumentIcon } from '../../static/img/document-icon.svg';

const ContentPanel = () => {
    return (
        <div className="mainContainer__right">
            <div className="documentHeading">
                <DocumentIcon />
                <h2>Document 01</h2>
            </div>

            <div className="viewerFrame">
                
            </div>
        </div>
    )
}

export default ContentPanel
