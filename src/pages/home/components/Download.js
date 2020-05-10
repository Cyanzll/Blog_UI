import React, { Component } from 'react';
import {
		DownloadApp,
		DownloadInfo
}from '../style'

class Download extends Component {
	render() {
		return (
			<DownloadApp href="/">
				<img className="code" alt="下载APP" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
				<DownloadInfo>
					<span className="main">下载APP ></span>
					<span className="sub">随时随地发现和创作内容</span>
				</DownloadInfo>
			</DownloadApp>
		)
	}
}

export default Download;