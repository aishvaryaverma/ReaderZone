import React from 'react';
import { ReactComponent as Logo } from '../../static/img/logo_sm_white.svg';
import { ReactComponent as DocumentIcon } from '../../static/img/document-icon-small.svg';
import { ReactComponent as UploadIcon } from '../../static/img/upload-icon.svg';

const LeftNavigation = () => {

	const onChange = (e) => {
		console.log(e)
		console.log(document.getElementById('fileItem').files[0]);
	}

    return (
        <div className="mainContainer__left">
			<div className="brand-logo">
				<Logo width="208" />
			</div>

			<div className="fileList">
				<div className="fileList__heading">Files</div>
				<div className="fileList__listItems">
					<div className="fileList__listItems--card current">
						<div className="icon"><DocumentIcon /></div>
						<div className="content">
							<h2>Document 01</h2>
							<p>Nam vel porta velit</p>
						</div>
					</div>
					<div className="fileList__listItems--card">
						<div className="icon"><DocumentIcon /></div>
						<div className="content">
							<h2>Document 01</h2>
							<p>Nam vel porta velit</p>
						</div>
					</div>
				</div>
			</div>

			<div className="uploadButton">
				<input type="file" className="fileInput" id="fileItem" onChange={onChange} />
				<button className="btn">
					<UploadIcon />
					<span>Upload Files</span>
				</button>
			</div>
        </div>
    )
}

export default LeftNavigation
