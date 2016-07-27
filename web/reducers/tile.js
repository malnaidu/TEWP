
 import { CLICK_TO_LINK} from '../actions/tile';

const initialState = {

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CLICK_TO_LINK:
        default:
            return state;
    }
}