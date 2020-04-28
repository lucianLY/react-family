import { GET_VISA_REQUEST, GET_VISA_SUCCESS, GET_VISA_FAIL } from "../actions/visa"

const initState = {
    isLoading: false,
    visaList: {},
    errorMsg: ''
}

export default function reducer ( state = initState, action ) {
    switch ( action.type ) {
        case GET_VISA_REQUEST:
            return {
                ...state,
                isLoading: true,
                visaList: {},
                errorMsg: ''
            }
            break;
        case GET_VISA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                visaList: action.visaList,
                errorMsg: ''
            }
            break;
        case GET_VISA_FAIL:
            return {
                ...state,
                isLoading: false,
                visaList: {},
                errorMsg: '请求失败'
            }
            break;
        default:
            return state;
    }
}