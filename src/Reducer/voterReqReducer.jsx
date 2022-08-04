export const getVoterReqByid =  (state={
    getVoterReqIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_VOTER_REQUEST_ID":
          return ({
            getVoterReqIdResp: action.payload
          });
        case "GET_VOTER_REQUEST_ID_ERR":
          return({
            getVoterReqIdResp:action.payload
          })
          case "RESET":
          return({
            getVoterReqIdResp:""
          })
        default:
          return state;
      }
  };

  export const getAllVoterReq =  (state={
    getAllVoterReqResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_VOTER_REQUEST":
          return ({
            getAllVoterReqResp: action.payload
          });
        case "GET_ALL_VOTER_REQUEST_ERR":
          return({
            getAllVoterReqResp:action.payload
          })
          case "RESET":
          return({
            getAllVoterReqResp:""
          })
        default:
          return state;
      }
  };

  export const registerVoterReq =  (
    state={
      registerVoterReqResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_VOTER_REQUEST":
            return({
              registerVoterReqResp:action.payload
            })
          case "REGISTER_VOTER_REQUEST_ERR":
          return({
            registerVoterReqResp:action.payload
          })
          case "RESET":
          return({
            registerVoterReqResp:""
          })
          default:
            return state;
        }
  };

  export const updateVoterReq =  (state={
    updateVoterReqResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_VOTER_REQUEST":
          return ({
            updateVoterReqResp: action.payload
          });
        case "UPDATE_VOTER_REQUEST_ERR":
          return({
            updateVoterReqResp:action.payload
          })
          case "RESET":
          return({
            updateVoterReqResp:""
          })
        default:
          return state;
      }
  };


  