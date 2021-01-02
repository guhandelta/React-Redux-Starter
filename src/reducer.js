let lastId = 0;

export default function reducer(state=[], action){ // Initial state [], to prevent it being set to undefined
    switch(action.type){
        case "bugAddes":
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
        case "bugRemoved":
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