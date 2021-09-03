export function createStore(rootReducer, initialState) {
  // creating default
  let state = rootReducer(initialState, { type: '__INIT__' });
  const subscribers = [];

  return {
    // action - is a object with a key 'type'
    // reducer - is a function which describes how to change the state depending
    // on the given action
    dispatch(action) {
      // update the state
      state = rootReducer(state, action);

      // tell subscribers that the state was changed
      // each element in the 'subscribers' is a function which we simply call
      subscribers.forEach(sub => sub());
    },
    // add new subscriber
    subscribe(callback) {
      subscribers.push(callback);
    },
    // return current state
    getState() {
      return state;
    },
  };
}
