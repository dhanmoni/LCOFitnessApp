import {
    SET_NAME,
    SET_COUNT_NORMAL,
    SET_ALL_WORKOUT,
    SET_DAYWISE_WORKOUT,
    SET_NORMAL_WORKOUT,
    SET_COUNT_DAYWISE,
    RESET
} from '../actions/types'
//import isEmpty from '../../validation/isEmpty'

const initialState = {
    user_name: 'DMN',
    set_count_normal: 1,
    set_count_daywise: 1,
    all_workout: [],
    daywise_workout: [],
    normal_workout: []

}
export default function (state = initialState, action) {



    switch (action.type) {

        case SET_NAME:
            return {
                ...state,
                user_name: action.payload
            }
        case SET_COUNT_NORMAL:
            return {
                ...state,
                set_count_normal: action.payload
            }
        case SET_COUNT_DAYWISE:
            return {
                ...state,
                set_count_daywise: action.payload
            }
        case SET_ALL_WORKOUT:
            return {
                ...state,
                all_workout: action.payload
            }
        case SET_NORMAL_WORKOUT:
            return {
                ...state,
                normal_workout: state.all_workout.sort(() => 0.5 - Math.random()).slice(0, 5).map(item => ({ ...item, isCompleted: false, isRunning: false }))
            }
        case SET_DAYWISE_WORKOUT:
            return {
                ...state,
                daywise_workout: state.all_workout.sort(() => 0.5 - Math.random()).slice(0, 5).map(item => ({ ...item, isCompleted: false, isRunning: false }))
            }
        case RESET:
            return {
                ...state,
                user_name: 'DMN',
                set_count_normal: 1,
                set_count_daywise: 1,
                all_workout: [],
                daywise_workout: [],
                normal_workout: []

            }
        default:
            return state;
    }
}