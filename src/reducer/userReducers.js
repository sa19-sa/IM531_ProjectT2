export default function userReducer(state = {
  user_data: {
    id: '',
    name: '',
    mail: '',
  },
  loggedIn: false,
  message: '',
}, action) {
  switch (action.type) {
    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        user_data: { id: action.payload.id, name: action.payload.name, mail: action.payload.mail },
      };
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        message: 'Login not possible.',
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        user_data: action.payload.user_data,
        loggedIn: action.payload.loggedIn,
      };
    }
    case 'LOAD_USER_DATA': {
      return {
        ...state,
      };
    }
    case 'LOAD_USER_DATA_FULFILLED': {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    default: {
      return state;
    }
  }
}
