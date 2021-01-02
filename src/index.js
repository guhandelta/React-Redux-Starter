import store from './store'
import { bugAdded } from './actions'

/* The subscribe() returns as fn() to unsubscribe, from the store
 unsubscribe() is important, like in cases when the user navigates to a different page, and the UI will not-
- be used there, so the subscription won't be need over there, as the subscriptions can create memory leaks. 
 If the current component will not be visible, the store can be unsubscribed to prevent memory leaks */
const unSubscribe = store.subscribe(()=>{
    console.log("Store Changed!!!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
/* store.dispatch("Bug 1");

 store.dispatch({
    type: actions.BUG_REMOVED,
   payload:{         id: 1
    }
}); */


console.log(store.getState());
/* Store Object has many methods
    1) dispatch(action) to dispatch actions
    2) subscribe(listener) to get notifications everytime the state of the store changes
    3) getState() Returns the current state of the app's state tree, which will be the last value returned 
        -by the store's reducer.
    4) replaceReducer(nextReducer) - To replace the reducer(). It is an advanced API and might be needed if the 
        - app implements code splitting, and if some of the reducers are needed to be loaded dynamically
*/