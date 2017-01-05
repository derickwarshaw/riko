"use strict";
import _ from 'lodash';
import * as types from '../../js/constants/actions/actionTypes';
import { Map } from 'immutable';

/*------------------------*/
/*--WITH-- Immutable JS*/
/*------------------------*/
//Every reducer should have an initial state variable here
const initialState = Map({
    id: 0,
    userId: 0,
    title: "Initial State Title",
    body: "Pending Request..",
    postNumber: 0
});

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_POSTS: {
            return state.mergeDeep(action.data);
        }
        case types.UPDATE_POST_NUMBER: {
            return state.set('postNumber', action.data);
        }
        default: {
            return state;
        }
    }
};

/*------------------------*/
/*--WITHOUT-- Immutable JS*/
/*------------------------*/
// const initialState = {
//     id: 0,
//     userId: 0,
//     title: "Initial State Title",
//     body: "Pending Request..",
//     postNumber: 0
// };
//
// const asyncReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case types.UPDATE_POSTS: {
//             return _.assign({}, state, action.data);
//         }
//         case types.UPDATE_POST_NUMBER: {
//             return _.assign({}, state, action.data);
//         }
//         default: {
//             return state;
//         }
//     }
// };

export default asyncReducer;