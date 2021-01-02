import store from './store'


store.dispatch({
    type: 'bugAdded',
    payload:{
        description: 'Bug1'
    }
})

store.dispatch({
    type: 'bugRemoved',
    payload:{
        id: 1
    }
})


console.log(store.getState());
/* Store Object has many methods
    1) dispatch(action) to dispatch actions
    2) subscribe(listener) to get notifications everytime the state of the store changes
    3) getState() Returns the current state of the app's state tree, which will be the last value returned 
        -by the store's reducer.
    4) replaceReducer(nextReducer) - To replace the reducer(). It is an advanced API and might be needed if the 
        - app implements code splitting, and if some of the reducers are needed to be loaded dynamically

*/