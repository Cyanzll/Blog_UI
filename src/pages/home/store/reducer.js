import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: "人文社科",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	},{
		id: 2,
		title: "心理健康",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	},{
		id: 2,
		title: "心理健康",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	},{
		id: 2,
		title: "心理健康",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	},{
		id: 2,
		title: "心理健康",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	},{
		id: 2,
		title: "心理健康",
		imgUrl: "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
	}],
	
	articleList: [
		{
			id: 1,
			title: "深圳博物馆――深圳书城――深圳图书馆",
			author: "Lily",
			comment: 13,
			star: 239,
			imgUrl: "https://upload-images.jianshu.io/upload_images/3787433-58903e8faea47b76.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
			desc: "先上几张图深圳音乐厅深圳莲花山公园其他三个地方忘了拍封面图了。好吧，回归正题。其实这也不算心得，只是我回家后的一些看法和感受，如果你们想要去玩这几个地方的可以参考一下，毕竟熟悉一下去的时候总会轻松一些..."
		},{
			id: 1,
			title: "深圳博物馆――深圳书城――深圳图书馆",
			author: "Lily",
			comment: 13,
			star: 239,
			imgUrl: "https://upload-images.jianshu.io/upload_images/3787433-58903e8faea47b76.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
			desc: "先上几张图深圳音乐厅深圳莲花山公园其他三个地方忘了拍封面图了。好吧，回归正题。其实这也不算心得，只是我回家后的一些看法和感受，如果你们想要去玩这几个地方的可以参考一下，毕竟熟悉一下去的时候总会轻松一些..."
		},{
			id: 1,
			title: "深圳博物馆――深圳书城――深圳图书馆",
			author: "Lily",
			comment: 13,
			star: 239,
			imgUrl: "https://upload-images.jianshu.io/upload_images/3787433-58903e8faea47b76.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp",
			desc: "先上几张图深圳音乐厅深圳莲花山公园其他三个地方忘了拍封面图了。好吧，回归正题。其实这也不算心得，只是我回家后的一些看法和感受，如果你们想要去玩这几个地方的可以参考一下，毕竟熟悉一下去的时候总会轻松一些..."
		}
	]
});

export default ( state = defaultState, action ) => {
	switch (action.type) {
		default:
			return state;
	}
}