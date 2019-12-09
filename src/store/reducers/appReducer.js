import types from '../types';

const intialState = {
    days: [],
    break: null,
    types: [],
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SET_TYPES:
            return {
                ...state,
                types: [...state.types, action.data]
            }
        case types.SET_DAYS: 
        return {
            ...state,
            days: [...action.data]
        }    
        case types.SET_BREAK_TIME: 
        return {
            ...state,
            break: action.data
        }    
        case types.SET_BOOKED_APP: 
        const updtedDays= state.days.map(day=>{
            if (day.name === action.data.day){
                day.breakAndBookedTimes.push(action.data.bookedApp)               
            } 
            return day
        })
        return {
            ...state,
            days:[...updtedDays]
        }    
        default:
            return state;
    }
}


export default reducer;