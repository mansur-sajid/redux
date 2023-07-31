import { BUY_ICE, ADD_ICE } from "./types";

const initial= {
    noOfIceCreams: 20
}

const iceReducer = (state = initial, action)=>{
    switch (action.type){
        case ADD_ICE:
            return{
                ...state,
                noOfIceCreams : state.noOfIceCreams  + 1
            }
        case BUY_ICE:
            return{
                ...state,
                noOfIceCreams : state.noOfIceCreams  - 1
            }
        default: 
        return{
            ...state
        }
    }
}

export default iceReducer