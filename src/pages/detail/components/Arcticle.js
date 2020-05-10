import React, { Component } from 'react';
import {
	ArticleWrapper,
	AuthorInLine,
	Avatar,
	ArticleBody
} from '../style';

class Article extends Component {
	render() {
		return(
			<ArticleWrapper>
				{/* 标题 */}
				<h1 className="title">从作用域到闭包</h1>

				{/* 内联作者信息 */}
				<AuthorInLine>
					<Avatar alt="cyan" src="https://upload.jianshu.io/users/upload_avatars/22396740/196d67d3-7108-416a-8d23-f91351317a74.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
					<div className="info">
						<div className="name"><a>Cyan</a></div>
						<div className="add">
							<span>2020.05.02 22:04:06</span>
							<span>字数 806</span>
							<span className="last">阅读 0</span>
						</div>
					</div>
					<a className="edit">编辑文章</a>
				</AuthorInLine>

				{/* 主体 */}
				<ArticleBody>
					<p></p>
				</ArticleBody>
			</ArticleWrapper>
		);
	}
}

export default Article;