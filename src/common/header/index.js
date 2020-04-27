import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	HeaderWidthLimit,
	Logo,
	Nav,
	NavItem,
	NavSearchWrapper,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoList,
	SearchInfoItem
} from './style';

class Header extends Component {

	showSearchInfo = ( focus ) => {
		if( focus ) {
			return (
				<SearchInfo>
					<SearchInfoTitle>
						<span className="title">热门搜索</span>
						<span className="switch">换一批</span>
					</SearchInfoTitle>
					<SearchInfoList>
						{this.props.list.map((item, index)=>{
								return(<SearchInfoItem key={item}>{item}</SearchInfoItem>);
						})}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	};

	render() {
		return (
			<HeaderWrapper>
				<HeaderWidthLimit>
					<Logo/>
					<Nav>
						<NavItem className="left index">
							<span className="iconfont">&#xe6a1;</span> 首页
						</NavItem>
						<NavItem className="left">
							<span className="iconfont">&#xe853;</span>下载APP
						</NavItem>
						<NavItem className="right">
							登录
						</NavItem>
						<NavItem className="right">
							<span className="iconfont">&#xe636;</span>
						</NavItem>
						<NavSearchWrapper>
							<CSSTransition
								timeout = {350}
								in = {this.props.focused}
								classNames = "slide"
							>
								<NavSearch 
								className = {this.props.focused ? "focused" : ""}
								onFocus = {this.props.handleInputFocus}
								onBlur = {this.props.handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={this.props.focused ? "iconfont focused" : "iconfont"}>&#xe63d;</span>
							{ this.showSearchInfo(this.props.focused) }
						</NavSearchWrapper>
					</Nav>
					<Addition>
						<Button className="write"><span className="iconfont">&#xe615;</span>写文章</Button>
						<Button className="reg">注册</Button>
					</Addition>
				</HeaderWidthLimit>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	focused: state.getIn(["header", "focused"]),  //combineReducers, immutable.js
	list: state.getIn(["header", "list"])
});

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus() {
		dispatch(actionCreators.getList());
		dispatch(actionCreators.getFocusedAction());
	},
	handleInputBlur() {
		dispatch(actionCreators.getBlurAction());
	}
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );