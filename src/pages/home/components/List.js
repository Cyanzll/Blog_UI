import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	ListItem,
	ListInfo,
	Bottom
}from '../style'

class List extends Component {
	render() {
		const list = this.props.articleList;
		return (
			<Fragment>
				{
					list.map((item, index) => (
						<ListItem key={index}>
							<img className="list_img" alt="" src={item.get("imgUrl")} />{/*文章图*/}
							<ListInfo>
								<a className="title" href="">{item.get("title")}</a> {/*文章标题*/}
								<p className="article">{item.get("desc")}</p>
								<Bottom> {/*文章底部：作者 评论 点赞*/}
									<span className="author">{item.get("author")}</span>
									<div className="comment">
										<span className="iconfont">&#xe613;</span>
										{item.get("comment")}
									</div>
									<div className="star">
										<span className="iconfont">&#xe640;</span>
										{item.get("star")}
									</div>
								</Bottom>
							</ListInfo>
						</ListItem>
					))
				}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	articleList: state.getIn(["home","articleList"])
});

export default connect( mapStateToProps, null )( List );