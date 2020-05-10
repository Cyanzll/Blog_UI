import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	RecommendWrapper,
	RecItem
} from '../style';

class Recommend extends Component {
	render() {
		return(
				<RecommendWrapper>
					{/* 标题 */}
					<div className="title">
						<h3>推荐阅读</h3>
					</div>
					{/* 列表 */}
					{
						this.props.reclist.map((item, index)=>{
							return (
								<RecItem key={item.get("id")}>
									<div className="head"><a>{item.get("title")}</a></div>
									<div className="total"><span>阅读 {item.get("total")}</span></div>
								</RecItem>
							)
						})
					}
				</RecommendWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	reclist: state.getIn(["detail","reclist"])
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)( Recommend );