export const getElectrolOfficerByid =  (state={
    getElectrolOfficerIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ELECTROLOFFICER_ID":
          return ({
            getElectrolOfficerIdResp: action.payload
          });
        case "GET_ELECTROLOFFICER_ID_ERR":
          return({
            getElectrolOfficerIdResp:action.payload
          })
          case "RESET":
          return({
            getElectrolOfficerIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerElectrolOfficer =  (
    state={
      registerElectrolOfficerResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_ELECTROLOFFICER":
            return({
              registerElectrolOfficerResp:action.payload
            })
          case "REGISTER_ELECTROLOFFICER_ERR":
          return({
            registerElectrolOfficerResp:action.payload
          })
          case "RESET":
          return({
            registerElectrolOfficerResp:""
          })
          default:
            return state;
        }
  };

  export const getElectrolOfficerByEmail =  (state={
    getElectrolOfficerEmailResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ELECTROLOFFICER_EMAIL":
          return ({
            getElectrolOfficerEmailResp: action.payload
          });
        case "GET_ELECTROLOFFICER_EMAIL_ERR":
          return({
            getElectrolOfficerEmailResp:action.payload
          })
          case "RESET":
          return({
            getElectrolOfficerEmailResp:""
          })
        default:
          return state;
      }
  };

  export const updateElectrolOfficer =  (state={
    updateElectrolOfficerResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_ELECTROLOFFICER":
          return ({
            updateElectrolOfficerResp: action.payload
          });
        case "UPDATE_ELECTROLOFFICER_ERR":
          return({
            updateElectrolOfficerResp:action.payload
          })
          case "RESET":
          return({
            updateElectrolOfficerResp:""
          })
        default:
          return state;
      }
  };

  export const deleteElectrolOfficer =  (state={
    deleteElectrolOfficerResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_ELECTROLOFFICER":
          return ({
            deleteElectrolOfficerResp: action.payload
          });
        case "DELETE_ELECTROLOFFICER_ERR":
          return({
            deleteElectrolOfficerResp:action.payload
          })
          case "RESET":
          return({
            deleteElectrolOfficerResp:""
          })
        default:
          return state;
      }
  };

 