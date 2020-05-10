import React, { Component } from 'react';
import { connect } from 'react-redux';
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
				<h1 className="title">{this.props.title}</h1>

				{/* 内联作者信息 */}
				<AuthorInLine>
					<Avatar alt={this.props.author} src={this.props.avatar}/>
					<div className="info">
						<div className="name"><a>{this.props.author}</a></div>
						<div className="add">
							<span>{this.props.date} {this.props.time}</span>
							<span>字数 806</span>
							<span className="last">阅读 0</span>
						</div>
					</div>
					<a className="edit">编辑文章</a>
				</AuthorInLine>

				{/* 主体 */}
				<ArticleBody dangerouslySetInnerHTML={{__html:this.props.content}}>
				</ArticleBody>
			</ArticleWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	title: state.getIn(["detail","title"]),
	content: state.getIn(["detail","content"]),
	author: state.getIn(["detail","author"]),	
	avatar: state.getIn(["detail","avatar"]),
	date: state.getIn(["detail","date"]),
	time: state.getIn(["detail","time"])
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)( Article );