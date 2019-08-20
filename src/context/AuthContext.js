import createDataContext from './createDataContext';
import {auth} from '../utils/firebaseconfig';
import {Alert} from 'react-native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'error':
      return {...state, ...{errorMessage: action.payload}, ...{loading: false}};
    case 'signUp':
      return {...state, ...{data: action.payload}, ...{loading: false}};
    case 'signIn':
      return;
    case 'inProgress':
      return {...state, ...{loading: true}};
    default:
      return state;
  }
};

const signIn = dispatch => {
  return async ({email, password}) => {
    try {
      dispatch({type: 'inProgress'});
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch({type: 'signIn', payload: response.data});
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Something went wrong',
      });
    }
  };
};

const signUp = dispatch => {
  return async ({email, password}) => {
    try {
      dispatch({type: 'inProgress'});
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(response.data);

      dispatch({type: 'signUp', payload: response.data});
    } catch (err) {
      dispatch({
        type: 'error',
        payload: 'Something went wrong',
      });
      
      Alert.alert('Something went wrong');

    }
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signUp, signIn},
  {},
);
