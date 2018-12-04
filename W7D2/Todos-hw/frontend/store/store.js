import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';



const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState,
    applyMiddleware(addLogginToDispatch, bonusmiddleWare)
    );
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = store => next => action => {
  console.log('State pre-dispatched:', store.getState());
  console.log('Action received:', action);
  let result = next(action);
  console.log('State post-dispatched:', store.getState());
  return result;
};

const bonusmiddleWare = store => next => action => {
  //
};

export default configureStore;
