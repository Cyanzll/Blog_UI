import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    FooterWrapper,
    FooterBody
} from './style';

class Footer extends Component {
	render() {
		return(
			<FooterWrapper>
					<FooterBody>
							<div className="left">
								<span>©2019-2020 版权所有 Cyan_zll</span>
								<span>陕西省西安市长安区西沣路</span>
							</div>
							<div className="right">
								<div className="react"></div>
							</div>
					</FooterBody>
			</FooterWrapper>
		);
	}
}

export default Footer;