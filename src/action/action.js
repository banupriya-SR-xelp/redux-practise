export const SUCCESS = "SUCCESS";
export const REQUESTING = "REQUESTING";
export const FAILURE = "FAILURE";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export function getUserRequesting() {
  return {
    type: GET_USERS_REQUEST,
    status: REQUESTING
  };
}

export function getUserSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    status: SUCCESS,
    userdata: data
  };
}

export function getUserFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: FAILURE,
    usererror: error
  };
}

export function getuser() {
  return async dispatch => {
    try {
      dispatch(getUserRequesting());
      const result = await fetch("https://api.github.com/users");
      const resultJson = await result.json();
      if (resultJson.error) {
        throw new Error(resultJson.error);
      }
      return dispatch(getUserSuccess(resultJson));
    } catch (e) {
      dispatch(getUserFailure(e.message));
    }
  };
}
