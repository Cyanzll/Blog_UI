import {
    SEARCH_FOCUSED,
    SEARCH_BLUR,
} from "./actionTypes";

export const getFocusedAction = () => ({
    type: SEARCH_FOCUSED
});

export const getBlurAction = () => ({
    type: SEARCH_BLUR
});