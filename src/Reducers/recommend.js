import { GET_RECOMMENDATIONS } from '../Actions/types'
const initialState = {
    recommended:[]
};

export default function (state = initialState , action) {
    const {type , payload} = action;
    switch (type) {
        case GET_RECOMMENDATIONS:
            return {
                recommended: payload
            }
            
        default:
            return state
    }
}