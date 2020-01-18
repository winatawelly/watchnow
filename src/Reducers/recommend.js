import { GET_RECOMMENDATIONS , CLEAR_RECOMMENDATIONS } from '../Actions/types'
const initialState = {
    loading:true,
    recommended:[]
};

export default function (state = initialState , action) {
    const {type , payload} = action;
    switch (type) {
        case GET_RECOMMENDATIONS:
            return {
                ...state,
                recommended: payload,
                loading:false
            }
        case CLEAR_RECOMMENDATIONS:
            return{
                loading:true,
                recommended:[]
            }
            
        default:
            return state
    }
}