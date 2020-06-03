import { SET_NAME, SET_ALL_WORKOUT, SET_NORMAL_WORKOUT, SET_DAYWISE_WORKOUT, SET_COUNT_NORMAL, SET_COUNT_DAYWISE, RESET } from './types'

//Set or change name
export const setName = (data) => {
    return {
        type: SET_NAME,
        payload: data
    }
}

//Set set count for each normal and daywise mode
export const setCountNormal = (data) => {
    return {
        type: SET_COUNT_NORMAL,
        payload: data
    }
}
export const setCountDaywise = (data) => {
    return {
        type: SET_COUNT_DAYWISE,
        payload: data
    }
}

//Set all workouts on load onto redux store
export const setAllWorkout = (data) => {
    return {
        type: SET_ALL_WORKOUT,
        payload: data
    }
}

//Set the 5 normal workouts...
export const setNormalWorkout = () => {
    return {
        type: SET_NORMAL_WORKOUT,

    }
}

//Set the 5 daywise workouts
export const setDaywiseWorkout = () => {
    return {
        type: SET_DAYWISE_WORKOUT,

    }
}

export const reset = () => {
    return {
        type: RESET
    }
}