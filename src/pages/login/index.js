import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Bg,
	Body,
	LoginBox,
	Title,
	Username,
	Pwd,
	Addition,
	Button
} from './style';

/*Flex布局 */
class Login extends Component {
	render() {
		return (
			<Bg>
				<Body>
					<LoginBox>
						<Title>
							<h2 className="login">账号登录</h2>
						</Title>
						<Username/>
						<Pwd/>
						<Addition></Addition>
						<Button>登录</Button>
					</LoginBox>
				</Body>
			</Bg>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({

});

export default Login;
