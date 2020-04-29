import { GET_VISA_REQUEST, GET_VISA_SUCCESS, GET_VISA_FAIL } from "../actions/visa"

const initState = {
    isLoading: false,
    visaList: {},
    success: ''
}

export default function reducer ( state = initState, action ) {
    
    switch ( action.type ) {
        case GET_VISA_REQUEST:
            return {
                ...state,
                isLoading: true,
                success: false
            }
            break;
        case GET_VISA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                visaList: action.visaList,
                success: true
            }
            break;
        case GET_VISA_FAIL:
            return {
                ...state,
                isLoading: false,
                success: false
            }
            break;
        default:
            return state;
    }
}