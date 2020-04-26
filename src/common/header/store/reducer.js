import {
    SEARCH_FOCUSED,
    SEARCH_BLUR,
} from "./actionTypes";

const defaultState = {
    focused: false,
};

export default ( state = defaultState, action ) => {
	if(action.type === SEARCH_FOCUSED) {
			return {
					focused: true
			}
	}

	if(action.type === SEARCH_BLUR) {
			return {
					focused: false
			}
	}
	
	return state;
}