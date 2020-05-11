import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import { connect } from 'react-redux';
import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	GetTop
} from './style';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';


class Home extends PureComponent {

	getToTop() {
		window.scrollTo(0,0);
	}

	showGetTop() {
		if(this.props.scroll) {
			return (
				<GetTop onClick={ this.getToTop }><span className="iconfont">&#xe600;</span></GetTop>
			)
		}
	}

	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className="banner_img" alt="SZ" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589120798359&di=d2fcdf86723e14ed06429e7fb41ab576&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171128%2F1b734008618749b496b7a97a396b7dcc.jpeg"/>
					<Topic/>
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Download />
					<Writer />
				</HomeRight>
				{ this.showGetTop() }
			</HomeWrapper>
		)
	}

	componentDidMount() {
		window.scrollTo(0,0);
		this.props.homeDataCatch();
		this.bindEvent();
	}

	componentWillUnmount() { //home组件移除前，把“返回顶部”
		window.removeEventListener("scroll", this.props.changeScrollTopShow);
	}

	bindEvent() {
		window.addEventListener("scroll", this.props.changeScrollTopShow); //监听页面滚动
	}
}

const mapStateToProps = (state) => ({
	scroll: state.getIn(["home","scroll"])
});

const mapDispatchToProps = (dispatch) => ({
	homeDataCatch() {
		dispatch(actionCreators.getHomeDataAction());
	},
	changeScrollTopShow() {
		if(document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleScrollAction(true));
		} else {
			dispatch(actionCreators.toggleScrollAction(false));
		}
	}
})

export default connect( mapStateToProps, mapDispatchToProps ) ( Home );