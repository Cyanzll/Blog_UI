import { combineReducers } from 'redux-immutable'; //数据拆分
import { reducer as HeaderReducer } from '../common/header/store';
import { reducer as HomeReducer } from '../pages/home/store';

const reducer = combineReducers({ //immutable
	header: HeaderReducer,
	home: HomeReducer
});

export default reducer;
