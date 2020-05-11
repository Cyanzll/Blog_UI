import styled from 'styled-components';
import Bgimg from '../../statics/bg.jpg'; 

export const Bg = styled.div`
	position: absolute;
	top:0;
	left:0;
	height: 100%;
	width: 100%;
	background: url(${Bgimg});
	background-size: cover;
`;

export const Body = styled.div`
	background: rgba(0,0,0,0.2);
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginBox = styled.div`
	background: #fff;
	width: 272px;
	height: 360px;
	padding: 50px;
	padding-bottom: 30px;
	border-radius: 4px;
	box-shadow: 0 0 10px #999;
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		box-sizing: border-box;
		width: 272px;
		height: 40px;
		margin-bottom: 20px;
		font-size: 16px;
		color: rgb(64,64,64);
		padding: 0 10px;
		background: #eee;
		border: none;
		transition: all 50ms ease-in;
		&::placeholder {
			color: #999
			font-size: 16px;
		}
	}
	input:focus {
		background: #fff;
	}
`;

export const Title = styled.div`
	width: 272px;
	margin-bottom: 40px;
	.login {
		font-size: 20px;
		color: #ea6f5a;
		font-weight: 500;
	}
`;

export const Username = styled.input.attrs({
	placeholder: "用户名"
})``;

export const Pwd = styled.input.attrs({
	placeholder: "密码"
})``;

export const Addition = styled.div`
	width: 272px;
	height: 40px;
`;

export const Button = styled.button`
	background: #ea6f5a;
	width: 272px;
	height: 35px;
	line-hieght: 30px;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	color: #fff;
	cursor: pointer;
	transition: all 50ms ease-in;
	&: hover {
		background: #ec6149;
	}
`;


