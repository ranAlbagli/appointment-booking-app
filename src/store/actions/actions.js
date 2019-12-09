import types from '../types';


export const createAction = (data, type = '') => {
    return {
        type,
        data
    }
};


export const setTypes = (name, minutes) => {
    const ty = {
        name,
        minutes
    }
    return createAction(ty, types.SET_TYPES);
}

export const setDays = days => {
    return createAction(days, types.SET_DAYS);
}
export const setBreakTime = breakTime => {
    return createAction(breakTime, types.SET_BREAK_TIME);
}
export const setBookedApp = (startTime,endTime,day,type) => {
    const data={
        day:day.name,
        bookedApp:{
            from:startTime,
            to:endTime,
            desc:type.name
        }
    }
    return createAction(data, types.SET_BOOKED_APP);
}
