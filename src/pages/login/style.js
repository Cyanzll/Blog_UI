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
	min-height: 100vh;
`;

export const Body = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: bg 500ms ease-out forwards;
	@keyframes bg {
		from{
			background: rgba(255,255,255,1);
		}
		to{
			background: rgba(255,255,255,0);
		}
	}
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
		font-size: 15px;
		color: rgb(64,64,64);
		padding: 0 10px;
		background: #eee;
		border: 1px solid #fff;
		border-radius: 2px;
		transition: all 100ms ease-in;
		&::placeholder {
			color: #999
			font-size: 15px;
		}
	}
	input:focus {
		background: #fff;
		border: 1px solid #008B8B;
	}
	input:hover {
		border: 1px solid #008B8B;
	}
`;

export const Title = styled.div`
	width: 272px;
	margin-bottom: 40px;
	.login {
		font-size: 20px;
		color: #008B8B;
		font-weight: 530;
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
	background: #008B8B;
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
		background: #008080;
	}
`;


