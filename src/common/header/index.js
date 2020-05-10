import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Link } from 'react-router-dom';
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

	showSearchInfo = () => {
		const {
			focused,
			mouseIn,
			currentPage,
			totalPage,
			list,
			handleMouseEnter,
			handleMouseLeave,
			handleSwitchShow
		} = this.props;

		let endPage;
		let listToShow = [];
		const newList = list.toJS();
		if(currentPage !== totalPage) {  //计算切片终点
			endPage = 10;
		}else endPage = newList.length % 10;
		listToShow = newList.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + endPage);

		if( focused || mouseIn ) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						<span className="title">热门搜索</span>
						<span className="switch"
							onClick={() => {handleSwitchShow(this.spinIcon)}}
						>
							<span ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
							换一批
						</span>
					</SearchInfoTitle>
					<SearchInfoList>
						{listToShow.map((item)=>{
							return(<SearchInfoItem key={item}>{item}</SearchInfoItem>)
						})}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	};

	render() {
		const {
			focused,
			handleInputBlur,
      handleInputFocus,
      list
		} = this.props;
		return (
			<HeaderWrapper>
				<HeaderWidthLimit>
					<Link to="/"><Logo></Logo></Link>
					<Nav>
						<Link to="/">
							<NavItem className="left index">
								<span className="iconfont">&#xe6a1;</span> 首页
							</NavItem>
						</Link>
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
								onFocus = {()=>{handleInputFocus(list)}} 
								onBlur = {handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={focused ? "iconfont focused zoom" : "iconfont zoom"}>&#xe63d;</span>
							{ this.showSearchInfo() }
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
	mouseIn: state.getIn(["header", "mouseIn"]),
	list: state.getIn(["header", "list"]),
	currentPage: state.getIn(["header", "currentPage"])
});

const mapDispatchToProps = (dispatch) => ({
	handleInputFocus(list) {
    dispatch(actionCreators.getFocusedAction());
    (list.size === 0) && (dispatch(actionCreators.getList()));
	},
	handleInputBlur() {
		dispatch(actionCreators.getBlurAction());
	},
	handleMouseEnter() {
		dispatch(actionCreators.getEnterAction());
	},
	handleMouseLeave() {
		dispatch(actionCreators.getLeaveAction());
	},
	handleSwitchShow(spinIcon) {
		spinIcon.style.transform = "rotate(360deg)";
		dispatch(actionCreators.getSwitchAction());
	}
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );