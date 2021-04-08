import {useMemo} from 'react';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";

import reducers from "./reducers";

let store;

function initStore(initialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export function initializeStore(preloadedState) {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined;
  }

  if (typeof window === "undefined") return _store;

  if (!store) store = _store;

  return _store;
}

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}