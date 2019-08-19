import * as userAction from "../action/action.js";
const gitUserData = (
  state = {
    loading: false,
    userData: null,
    error: null,
    status: null
  },
  action
) => {
  switch (action.status) {
    case userAction.REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case userAction.SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        userData: action.userdata
      });

    case userAction.FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.usererror
      });
    default:
      return state;
  }
};
export default gitUserData;
