import React, { Component } from 'react';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';


class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner_img" alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588239306626&di=610954fef8e631ff758682539b50c17c&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1712%2F12%2Fc12%2F69564401_1513047787066_mthumb.jpg"/>
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Download />
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}
}

export default Home;