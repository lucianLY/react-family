export const GET_VISA_REQUEST = 'GET_VISA_REQUEST'
export const GET_VISA_SUCCESS = 'GET_VISA_SUCCESS'
export const GET_VISA_FAIL = 'GET_VISA_REQUEST'

let getVisaListRequest = () => ({
    type: GET_VISA_REQUEST
})

let getVisaListSuccess = list => ({
    type: GET_VISA_SUCCESS,
    visaList: list
})

let getVisaListFail = () => ({
    type: GET_VISA_FAIL
})


export function getVisaList(){
    return dispatch => {
        dispatch( getVisaListRequest() )

        return fetch("http://localhost:8080/api/visa.json")
        .then( (response => {
            return response.json()
        }))
        .then( (json) =>{
            dispatch( getVisaListSuccess(json.visa) )
        })
        .catch(
            () => {
                dispatch( getVisaListFail() )
            }
        )
    }
}