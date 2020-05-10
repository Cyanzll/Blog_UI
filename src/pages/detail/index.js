import React, { Component } from 'react';
import Article from './components/Arcticle';
import Author from './components/Author';
import Recommend from './components/Recommend';
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

export default Detail;