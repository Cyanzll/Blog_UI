import React, { PureComponent } from 'react';
import { actionCreators } from './store';
import Article from './components/Article';
import Author from './components/Author';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import {
	Body,
	DetailWrapper,
	DetailBody,
	DetailSide,
} from './style';

/*Flex布局 */
class Detail extends PureComponent {
	componentDidMount() {
    window.scrollTo(0,0);
    window.addEventListener("mousewheel", this.props.handleDetailScroll);
    this.props.detailDataCatch(this.props.match.params.id); //抓取数据
    this.props.getInDetail(true); 
  }
  componentWillUnmount() {
    this.props.getInDetail(false); 
  }
	render() {
		return (
			<Body>
				<DetailWrapper>
					<DetailBody>
						{/* 文章 */}
						<Article/>
					</DetailBody>
					<DetailSide>
						{/* 作者信息 */}
						<Author/>
						{/* 推荐阅读 */}
						<Recommend/>
					</DetailSide>
				</DetailWrapper>
			</Body>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	detailDataCatch(id) {
		dispatch(actionCreators.getDetailDataAction(id));
  },
  handleDetailScroll(e) {  //实现Detail页面Header切换
    const y = e.deltaY;
    if(y > 0) {
      dispatch(actionCreators.getScrollAction(true));
    } else if(y < 0) {
      dispatch(actionCreators.getScrollAction(false));
    } 
  },
  getInDetail(istrue) {
    if(istrue) {
      dispatch(actionCreators.getInDetailAction(true));
    }else{
      dispatch(actionCreators.getInDetailAction(false));
    }
  }
});

export default connect(null, mapDispatchToProps)( Detail );
