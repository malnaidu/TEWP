import { push } from 'react-router-redux';
export const CLICK_TO_LINK = "CLICK_TO_LINK";
export function routeToPage(link) {
	return (dispatch, getState) => {
		return dispatch(push(link))

	}
}
