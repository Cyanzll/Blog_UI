import React, { PureComponent, Fragment } from 'react';
import {
	Banner,
}from '../style'

class Recommend extends PureComponent {
	render() {
		return (
			<Fragment>
				<a href="/"><Banner src={require('../../../statics/home_ban/hall.png')}/></a>
				<a href="/"><Banner src={require('../../../statics/home_ban/jwc.png')}/></a>
				<a href="/"><Banner src={require('../../../statics/home_ban/hai.png')}/></a>
			</Fragment>
		)
	}
}

export default Recommend;