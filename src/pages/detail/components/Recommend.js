import React, { Component } from 'react';
import {
	RecommendWrapper,
} from '../style';

class Recommend extends Component {
	render() {
		return(
				<RecommendWrapper>
					<div className="title">
						<h3>推荐阅读</h3>
					</div>
				</RecommendWrapper>
		);
	}
}

export default Recommend;