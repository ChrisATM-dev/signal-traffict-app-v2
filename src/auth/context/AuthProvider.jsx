import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = {
  logged: false,
}

const init = () => {
  const authState = JSON.parse(localStorage.getItem('authState'));
  return {
    logged: !!authState,
    user: authState
  };
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (email, jwt) => {
    const user = {email, jwt};
    const action = { type: 'login', payload: user };
    dispatch(action);

    localStorage.setItem('authState', JSON.stringify(user));
  }

  const logout = () => {
    dispatch({ type: 'logout' });

    localStorage.removeItem('authState');
  }

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
