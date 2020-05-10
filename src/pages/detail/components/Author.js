import React, { Component } from 'react';
import {
	AuthorWrapper,
	Avatar,
	AuthorInfo
} from '../style';

class Author extends Component {
	render() {
		return(
				<AuthorWrapper>
					<AuthorInfo>
						<Avatar alt="cyan" src="https://upload.jianshu.io/users/upload_avatars/22396740/196d67d3-7108-416a-8d23-f91351317a74.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
						<div className="info">
							<a className="name">Cyan_zll</a>
							<span>总资产 0.088</span>
						</div>
					</AuthorInfo>
					<div className="divide"></div>
				</AuthorWrapper>
		);
	}
}

export default Author;