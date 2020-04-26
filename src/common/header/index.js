import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import {
	HeaderWrapper,
	HeaderWidthLimit,
	Logo,
	Nav,
	NavItem,
	NavSearchWrapper,
	NavSearch,
	Addition,
	Button
} from './style';

import {
	getFocusedAction,
	getBlurAction
} from './store/actionCreators'

const Header = (props) => {

	const {
		focused,
		handleInputBlur,
		handleInputFocus
	} = props;

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
							in = {focused}
							classNames = "slide"
						>
							<NavSearch 
							className = {focused ? "focused" : ""}
							onFocus = {handleInputFocus}
							onBlur = {handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<span className={focused ? "iconfont focused" : "iconfont"}>&#xe63d;</span>
					</NavSearchWrapper>
				</Nav>
				<Addition>
					<Button className="write"><span className="iconfont">&#xe615;</span>写文章</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWidthLimit>
		</HeaderWrapper>
	);
};

const mapStateToProps = (state) => ({
	focused: state.header.focused  //reducer拆分后这里也要改变
});

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus() {
		const action = getFocusedAction();
		dispatch(action);
	},
	handleInputBlur() {
		const action = getBlurAction();
		dispatch(action);
	}
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );