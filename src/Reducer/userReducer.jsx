export const getUserByid =  (state={
    getUserIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_USER_ID":
          return ({
            getUserIdResp: action.payload
          });
        case "GET_USER_ID_ERR":
          return({
            getUserIdResp:action.payload
          })
          case "RESET":
          return({
            getUserIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerUser =  (
    state={
      registerUserResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_USER":
            return({
              registerUserResp:action.payload
            })
          case "REGISTER_USER_ERR":
          return({
            registerUserResp:action.payload
          })
          case "RESET":
          return({
            registerUserResp:""
          })
          default:
            return state;
        }
  };

  export const getUserByEmail =  (state={
    getUserEmailResp:""
  }, action) => {
      switch (action.type) {
        case "GET_USER_EMAIL":
          return ({
            getUserEmailResp: action.payload
          });
        case "GET_USER_EMAIL_ERR":
          return({
            getUserEmailResp:action.payload
          })
          case "RESET":
          return({
            getUserEmailResp:""
          })
        default:
          return state;
      }
  };

  export const updateUser =  (state={
    updateUserResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_USER":
          return ({
            updateUserResp: action.payload
          });
        case "UPDATE_USER_ERR":
          return({
            updateUserResp:action.payload
          })
          case "RESET":
          return({
            updateUserResp:""
          })
        default:
          return state;
      }
  };

  export const deleteUser =  (state={
    deleteUserResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_USER":
          return ({
            deleteUserResp: action.payload
          });
        case "DELETE_USER_ERR":
          return({
            deleteUserResp:action.payload
          })
          case "RESET":
          return({
            deleteUserResp:""
          })
        default:
          return state;
      }
  };

