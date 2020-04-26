import styled from 'styled-components';
import logoPic from '../../statics/logo.png'; 

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #F0F0F0;
`

export const HeaderWidthLimit = styled.div`
	width: 1440px;
	height: 56px;
	margin: 0 auto;
`

export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top:0;
	left:50px;
	width: 100px;
	height: 56px;
	display: block;
	background: url(${logoPic}); //webpack打包问题
	background-size: contain;
`

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin: 0 auto;
	padding-right: 70px;
	box-sizing: border-box;
`

export const NavItem = styled.div`
	width: 89px;
	line-height: 56px;
	text-align: center;
	color: #333;
	font-size: 17px;
	&.left {
		float: left;
		.iconfont {
			line-height: 30px;
			width: 30px;
			font-size:17px;
		}
	}
	&.right {
		float: right;
		color: #969696;
		.iconfont {
			line-height: 30px;
			width: 30px;
			font-size:17px;
		}
	}
	&.index {
		color: #ea6f5a;
	}

`

export const NavSearch = styled.input.attrs({
	placeholder: "搜索"
})`
	width: 178px;
	height: 38px;
	border: none;
	border-radius: 19px;
	margin-top: 9px;
	padding: 0 35px 0 20px;
	background: #eee;
	margin-left: 50px;
	border-sizing: border-box;
	color: #777;
	&::placeholder {
		color: #999
	}
	&.focused {
		width: 250px;
	}
	//CSSTransition
	&.slide-enter {
		transition: all 350ms ease-out;
	}

	&.slide-exit {
		transition: all 350ms ease-out;
	}
`

export const Addition = styled.div`
	position: absolute;
	right:50px;
	top: 0;
	height: 56px;
`

export const Button = styled.button`
	float: right;
	line-height: 38px;
	border-radius: 19px;
	margin-top: 9px;
	border: 1px solid #ec6149;
	margin-right: 20px;
	padding: 0 20px;
	font-size: 14px;
	&.reg {
		color: #ec6149;
		background: #fff;
	}
	&.write {
		color: #fff;
		background: #ec6149;
	}
`

export const NavSearchWrapper = styled.div `
	float: left;
	position: relative;
	.iconfont {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width:30px;
		line-height:30px;
		text-align: center;
		border-radius: 15px;
		&.focused {
			color: #FFF;
			background: #777;
		}
	}
`

