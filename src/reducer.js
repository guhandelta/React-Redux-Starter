// import { BUG_ADDED, BUG_REMOVED } from './actionTypes'
// or
import * as actions from './actionTypes'

let lastId = 0;

export default function reducer(state=[], action){ // Initial state [], to prevent it being set to undefined
    switch(action.type){
        case actions.BUG_ADDED:
            return[
                // Take a copy of the state
                ...state,
                // Bug object
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
    
}

// function reducer(state=[], action){ // Initial state [], to prevent it being set to undefined
//     // if - else or switch - case may be implemented here
//     if(action.type === 'bugAdded'){
//         return[
//             // Take a copy of the state
//             ...state,
//             // Bug object
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ];
//     }else if(action.type === 'bugRemoved'){
//         return state.filter(bug => bug.id !== action.payload.id);
//     }
//     // When the app is started, the store will be initially undefined, and when Redux calls the reducer, it will-
//     //- pass in undefined as the value for the state. In that case return the state, instead of undefined or null
//     return state;
// }