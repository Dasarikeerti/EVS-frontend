export const getPartyByid =  (state={
    getPartyIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_PARTY_ID":
          return ({
            getPartyIdResp: action.payload
          });
        case "GET_PARTY_ID_ERR":
          return({
            getPartyIdResp:action.payload
          })
          case "RESET":
          return({
            getPartyIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerParty =  (
    state={
      registerPartyResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_PARTY":
            return({
              registerPartyResp:action.payload
            })
          case "REGISTER_PARTY_ERR":
          return({
            registerPartyResp:action.payload
          })
          case "RESET":
          return({
            registerPartyResp:""
          })
          default:
            return state;
        }
  };

  export const getAllParty =  (state={
    getAllPartyResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_PARTY":
          return ({
            getAllPartyResp: action.payload
          });
        case "GET_ALL_PARTY_ERR":
          return({
            getAllPartyResp:action.payload
          })
          case "RESET":
          return({
            getAllPartyResp:""
          })
        default:
          return state;
      }
  };

  export const updateParty =  (state={
    updatePartyResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_PARTY":
          return ({
            updatePartyResp: action.payload
          });
        case "UPDATE_PARTY_ERR":
          return({
            updatePartyResp:action.payload
          })
          case "RESET":
          return({
            updatePartyResp:""
          })
        default:
          return state;
      }
  };

  export const deleteParty =  (state={
    deletePartyResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_PARTY":
          return ({
            deletePartyResp: action.payload
          });
        case "DELETE_PARTY_ERR":
          return({
            deletePartyResp:action.payload
          })
          case "RESET":
          return({
            deletePartyResp:""
          })
        default:
          return state;
      }
  };




