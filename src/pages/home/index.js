import React, { Component } from 'react';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<div className="banner_img"/><div/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home;