export const ADD_USER_TYPE = Symbol("add-usersReducer");
export const UPDATE_USER_TYPE = Symbol("update-usersReducer");
export const DELETE_USER_TYPE = Symbol("delete-usersReducer");

export function createAddUserAction(user) {
  return {
    type: ADD_USER_TYPE,
    payload: user,
  };
}

export function createUpdateUserAction(id, newUser) {
  return {
    type: UPDATE_USER_TYPE,
    payload: {
      ...newUser,
      id,
    },
  };
}

export function createDeleteUserAction(id) {
  return {
    type: DELETE_USER_TYPE,
    payload: id,
  };
}