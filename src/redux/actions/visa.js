export const GET_VISA_REQUEST = 'visaList/GET_VISA_REQUEST'
export const GET_VISA_SUCCESS = 'visaList/GET_VISA_REQUEST'
export const GET_VISA_FAIL = 'visaList/GET_VISA_REQUEST'

function  getVisaListRequest () {
    return {
        type: GET_VISA_REQUEST
    }
}

function  getVisaListSuccess (list) {
    return {
        type: GET_VISA_REQUEST,
        visa: list
    }
}

function  getVisaListfail (list) {
    return {
        type: GET_VISA_FAIL
    }
}


export function getVisaList(){
    return function (dispatch){
        dispatch( getVisaListRequest() )

        return fetch("http://localhost:8080/api/visa.json")
        .then( (response => {
            return response.json()
        }))
        .then( (json) =>{
            dispatch( getVisaListSuccess(json) )
        })
        .catch(
            () => {
                dispatch( getVisaListfail() )
            }
        )
    }
}