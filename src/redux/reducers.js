import { combineReducers } from "redux"
import counter from "./reducers/counter"
import userInfo from "./reducers/userInfo"
import visaList from "./reducers/visa"

export default combineReducers({
    counter,
    userInfo,
    visaList
})