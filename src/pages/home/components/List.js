import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import { Link } from 'react-router-dom';
import {
	ListItem,
	ListInfo,
	Bottom,
	LoadMore
}from '../style'

class List extends PureComponent {
	render() {
		const list = this.props.articleList;
		return (
			<Fragment>
				{
					list.map((item) => (
						<ListItem key={item.get("id")}>
							<img className="list_img" alt="" src={item.get("imgUrl")} />{/*文章图*/}
							<ListInfo>
                <Link to='/detail'> {/*路由*/}
								  <div className="title">{item.get("title")}</div> {/*文章标题*/}
                </Link>
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
			<LoadMore onClick={() => {this.props.handleLoadMore(this.props.articleListPage)}}>阅读更多</LoadMore>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	articleList: state.getIn(["home","articleList"]),
	articleListPage: state.getIn(["home", "articleListPage"])
});

const mapDispatchToProps = (dispatch) => ({
	handleLoadMore(Page) {
		dispatch(actionCreators.getLoadMoreAction(Page));
	}
});

export default connect( mapStateToProps, mapDispatchToProps )( List );