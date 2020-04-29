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
				{this.props.topicList.map((item, index)=>{
					return(<TopicItem><div className="item_img"></div>{item.get("title")}</TopicItem>)
				})}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	topicList: state.getIn(["home","topicList"])
});

const mapDispatchToProps = () => {
	//空
};

export default connect( mapStateToProps, mapDispatchToProps )( Topic );