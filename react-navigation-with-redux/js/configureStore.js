import { createStore } from 'redux';
import reducer from './reducers';

export default function configureStore() {
  const store = createStore(reducer);
  return store;
}
