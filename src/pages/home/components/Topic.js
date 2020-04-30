import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	TopicWrapper,
	TopicItem,
} from "../style";

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.topicList.map((item, index)=>(
						<TopicItem key={index}>
							<img className="item_img" alt="" src={item.get("imgUrl")}/>{item.get("title")}
						</TopicItem>
					))
				}
				<TopicItem className = "more"><a href="">更多热门专题 ></a></TopicItem>
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	topicList: state.getIn(["home","topicList"])
});

export default connect( mapStateToProps, null )( Topic );