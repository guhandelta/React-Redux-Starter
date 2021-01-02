import * as actions from './actionTypes'
// it can also be done as => import { BUG_ADDED, BUG_REMOVED } from './actionTypes'
// - when there are not too many actions

// action craetors using arrow fn() gives a concise syntax
export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload:{
        description
    }
})
// or
// export function bugAdded(description){
//     return {
//         type: actions.BUG_ADDED,
//         payload:{
//             description: 'Bug1'
//         }
//     }
// }
// export const bugRemoved = id => ({
//     type: actions.BUG_ADDED,
//     payload:{
//         id
//     }
// })