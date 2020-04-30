import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	WriterWrapper,
	WriterHeader,
	WriterItem,
	WriterInfo 
}from '../style'

class Writer extends Component {

	showWriterList = () => {
		
		return(
			this.props.writerList.map((item, index) => (
				<WriterItem>
					<img className="photo" alt="" src={item.get("imgUrl")}/>
					<WriterInfo>
						<div className="header">
							<a href="/" className="name">{item.get("name")}</a>
							<a href="/" className="add">+关注</a>
						</div>
						<span className="info">写了{item.get("total")}k字 · {item.get("likes")}k喜欢</span>
					</WriterInfo>
				</WriterItem>
			))
		);
	}
	
	render() {
		return (
			<WriterWrapper>
				<WriterHeader>
					<span className="rec">推荐作者</span>
					<span className="switch">
						<span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
						换一批
					</span>
				</WriterHeader>
				{this.showWriterList()}
			</WriterWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	writerList: state.getIn(["home","writerList"])
});

export default connect( mapStateToProps, null )( Writer );