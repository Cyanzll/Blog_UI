import React, { Component } from 'react';
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
	SearchInfoItem,
	HeaderFirst,
	HeaderSecond,
	ArticleTitle
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
			handleSwitchShow,
			inDetail
		} = this.props;

		let endPage;
		let listToShow = [];
		const newList = list.toJS();
		if(currentPage !== totalPage) {  //计算切片终点
			endPage = 10;
		}else endPage = newList.length % 10;
		listToShow = newList.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + endPage);

		if( (focused || mouseIn) && !inDetail ) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						<span className="title">热门搜索</span>
						<span className="switch"
							onClick={ handleSwitchShow.bind(this, this.props.degree) }
						>
							<span ref={ e => this.spinIcon = e } className="iconfont spin">&#xe851;</span>
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
			<HeaderWrapper id="con" ref={e => this.wrapper = e}>
				<HeaderWidthLimit id="scrollUp">
					<HeaderFirst>
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
							<Link to="/login">
								<NavItem className="right">
									登录
								</NavItem>
							</Link>
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
					</HeaderFirst>
					{this.getHeaderSecond(this.props.inDetail)}
				</HeaderWidthLimit>
			</HeaderWrapper>
		);
	}

	//Detail头部切换效果
	componentDidMount() {
		if(this.props.inDetail) {
			this.wrapper.style.overflow = "hidden";
		} else {
			this.wrapper.style.overflow = "visible";
		}
	}

	componentDidUpdate() {
		if(this.props.inDetail) {
			this.wrapper.style.overflow = "hidden";
		} else {
			this.wrapper.style.overflow = "visible";
		}
	}

	getHeaderSecond(inDetail) {
		if(inDetail) {
			window.addEventListener("mousewheel",this.handleMouseWheel);
			return(
				<HeaderSecond>
					<ArticleTitle>
						<h1 className="title">
							{this.props.title}
						</h1>
					</ArticleTitle>
				</HeaderSecond>
			)
		} else {
			window.removeEventListener("mousewheel",this.handleMouseWheel);
		}
	}

	handleMouseWheel(e) {
		const div = document.getElementById("scrollUp");
		if(e.deltaY > 0) {
			div.classList.add("scrollUp");
		} else {
			div.classList.remove("scrollUp");
		}
	}

}

const mapStateToProps = (state) => ({
	focused: state.getIn(["header", "focused"]),  //combineReducers, immutable.js
	mouseIn: state.getIn(["header", "mouseIn"]),
	list: state.getIn(["header", "list"]),
	currentPage: state.getIn(["header", "currentPage"]),
	title: state.getIn(["detail", "title"]), //detail页面文章标题
	inDetail: state.getIn(["detail", "inDetail"]), //我们是否到达了Detail?
	degree: state.getIn(["header", "degree"])
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
	handleSwitchShow(degree) {
		const style = "rotate(" + (degree + 360) + "deg)"; 
		console.log(style);
		this.spinIcon.style.transform = style;
		dispatch(actionCreators.getSwitchAction(degree+360));
	}
});

export default connect( mapStateToProps, mapDispatchToProps )( Header );