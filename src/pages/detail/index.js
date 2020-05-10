import React, { Component } from 'react';
import { actionCreators } from './store';
import Article from './components/Article';
import Author from './components/Author';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import {
	Body,
	DetailWrapper,
	DetailBody,
	DetailSide,
} from './style';

/*Flex布局 */
class Detail extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
		this.props.detailDataCatch(this.props.match.params.id); //抓取数据
	}
	render() {
		return (
			<Body>
				<DetailWrapper>
					<DetailBody>
						{/* 文章 */}
						<Article/>
					</DetailBody>
					<DetailSide>
						{/* 作者信息 */}
						<Author/>
						{/* 推荐阅读 */}
						<Recommend/>
					</DetailSide>
				</DetailWrapper>
			</Body>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	detailDataCatch(id) {
		dispatch(actionCreators.getDetailDataAction(id));
	}
});

export default connect(null, mapDispatchToProps)( Detail );
