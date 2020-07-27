import { ADD } from '../actions/todolist'

// 创建 reducer
const initState = {}

export  default function reducer ( state = initState , action ){
    switch ( action.type ){
        case "ADD" :
            return action.name;
        default :
            return state
    }

}