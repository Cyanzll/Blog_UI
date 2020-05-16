import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
	TopicWrapper,
	TopicItem,
} from "../style";

class Topic extends PureComponent {
	render() {
		return (
			<TopicWrapper>
				{
					this.props.topicList.map((item, index)=>(
						<TopicItem key={item.get("id")}>
							<img className="item_img" alt="" src={item.get("imgUrl")}/>{item.get("title")}
						</TopicItem>
					))
				}
				<TopicItem className = "more"><a href="">更多专题 ></a></TopicItem>
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	topicList: state.getIn(["home","topicList"])
});

export default connect( mapStateToProps, null )( Topic );