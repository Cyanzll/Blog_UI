import styled from 'styled-components';
import logoPic from '../../statics/logo.png'; 

export const HeaderWrapper = styled.div`
	position: relative;
	height: 56px;
	border-bottom: 1px solid #F0F0F0;
`
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top:0;
	left:0;
	height: 56px;
	display: block;
	width: 100px;
	background: url(${logoPic});
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
	padding: 0 15px;
	line-height: 56px;
	color: #333;
	font-size: 17px;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.index {
		color: #ea6f5a;
	}
`

export const NavSearch = styled.input.attrs({
	placeholder: "搜索"
})`
	width: 160px;
	height: 38px;
	border: none;
	border-radius: 19px;
	margin-top: 9px;
	padding: 0 20px;
	background: #eee;
	margin-left: 20px;
	border-sizing: border-box;
	&::placeholder {
		color: #999
	}
`

export const Addition = styled.div`
	position: absolute;
	right:0;
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