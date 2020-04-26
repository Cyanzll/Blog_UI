import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component {

	constructor(props) { 
		super(props);
		this.state = {
			focused: false //聚焦
		}
		
		this.handleInputFocus = this.handleInputFocus.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
	}

	render() {
		return(
			<HeaderWrapper>
				<HeaderWidthLimit>
					<Logo/>
					<Nav>
						<NavItem className="left index"><span className="iconfont">&#xe6a1;</span> 首页</NavItem>
						<NavItem className="left"><span className="iconfont">&#xe853;</span>下载APP</NavItem>
						<NavItem className="right">登录</NavItem>
						<NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
						<NavSearchWrapper>
							<CSSTransition
								timeout={350}
								in={this.state.focused}
								classNames="slide"
							>
								<NavSearch 
								className = {this.state.focused?"focused":""}
								onFocus = {this.handleInputFocus}
								onBlur = {this.handleInputBlur}
								></NavSearch>
							</CSSTransition>
							<span className={this.state.focused?"iconfont focused":"iconfont"}>&#xe63d;</span>
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

	handleInputFocus() {
		this.setState(()=>({
			focused:true
		}));
	}

	handleInputBlur() {
		this.setState(()=>({
			focused:false
		}));
	}
}

export default Header;