import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	AuthorWrapper,
	Avatar,
	AuthorInfo,
	RecItem
} from '../style';

class Author extends Component {
	render() {
		return(
				<AuthorWrapper>
					<AuthorInfo>
						<Avatar alt={this.props.author} src={this.props.avatar}/>
						<div className="info">
							<a className="name">{this.props.author}</a>
							<span>总资产 0.088</span>
						</div>
					</AuthorInfo>
					<div className="divide"></div>
					{
						this.props.authorlist.map((item, index) => {
							return(
								<RecItem key={item.get("id")}>
								<div className="head"><a>{item.get("title")}</a></div>
								<div className="total"><span>阅读 {item.get("total")}</span></div>
								</RecItem>
							)
						})
					}
				</AuthorWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	author: state.getIn(["detail","author"]),	
	avatar: state.getIn(["detail","avatar"]),
	authorlist: state.getIn(["detail","authorlist"])
});

const mapDispatchToProps = (dispatch) => ({
	
});

export default connect(mapStateToProps, mapDispatchToProps)( Author );