import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../static/img/logo_sm_white.svg';
import { ReactComponent as DocumentIcon } from '../../static/img/document-icon-small.svg';
import { ReactComponent as UploadIcon } from '../../static/img/upload-icon.svg';

const LeftNavigation = ({
	files,
	updateIndex,
	onInputChange
}) => {
	const [fileList, setFileList] = useState(null);
	const [selector] = useState('.fileList__listItems--card');
	const [selector2] = useState('.mainContainer__right');

	useEffect(() => {
		let fileListArr = files.map((file, i) => {
			const allItems = Array.from(document.querySelectorAll(selector));
			allItems.forEach(item => item.classList.remove('current'));

			if(i === (files.length - 1)) {
				return (
					<div className="fileList__listItems--card current" data-index={i} key={i} onClick={e => onClick(e)}>
						<div className="icon"><DocumentIcon /></div>
						<div className="content">
							<h2>{file.name}</h2>
							<p>format: {file.format}</p>
						</div>
					</div>
				)
			} else {
				return (
					<div className="fileList__listItems--card" key={i} onClick={e => onClick(e)}>
						<div className="icon"><DocumentIcon /></div>
						<div className="content">
							<h2>{file.name}</h2>
							<p>format: {file.format}</p>
						</div>
					</div>
				)
			}
		});

		setFileList(fileListArr);
	// eslint-disable-next-line
	}, [files]);
	
	const onClick = (e) => {
		const allItems = Array.from(document.querySelectorAll(selector));
		const curItem = e.target.closest(selector);
		const index = allItems.indexOf(curItem);
		
		allItems.forEach(item => item.classList.remove('current'));
		curItem.classList.add('current');
		document.querySelector(selector2).classList.add('showMobile');
		updateIndex(index);
	}

	const onChange = (e) => {
		if(e.target.files[0]) {
			const file = e.target.files[0]
			const name = file.name.split('.')[0];
			const format = e.target.files[0].name.split('.')[1];
			
			// Show File
			var reader = new FileReader();
			reader.onload = function (evt) {
				const data = evt.target.result
				onInputChange(name, format, data);
				updateIndex(files.length)
			};

			reader.readAsDataURL(file);
		}
	}

    return (
        <div className="mainContainer__left">
			<div className="brand-logo">
				<Logo width="208" />
			</div>

			<div className="fileList">
				<div className="fileList__heading">Files</div>
				<div className="fileList__listItems">
					{fileList}
				</div>
			</div>

			<form className="uploadButton">
				<input type="file" className="fileInput" id="fileItem" onChange={onChange} />
				<button className="btn">
					<UploadIcon />
					<span>Upload Files</span>
				</button>
			</form>
        </div>
    )
}

export default LeftNavigation
