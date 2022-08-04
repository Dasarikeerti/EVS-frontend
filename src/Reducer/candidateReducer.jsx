export const getCandidateByid =  (state={
    getCandidateIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_CANDIDATE_ID":
          return ({
            getCandidateIdResp: action.payload
          });
        case "GET_CANDIDATE_ID_ERR":
          return({
            getCandidateIdResp:action.payload
          })
          case "RESET":
          return({
            getCandidateIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerCandidate =  (
    state={
      registerCandidateResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_CANDIDATE":
            return({
              registerCandidateResp:action.payload
            })
          case "REGISTER_CANDIDATE_ERR":
          return({
            registerCandidateResp:action.payload
          })
          case "RESET":
          return({
            registerCandidateResp:""
          })
          default:
            return state;
        }
  };

  export const getAllCandidate =  (state={
    getAllCandidateResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_CANDIDATE":
          return ({
            getAllCandidateResp: action.payload
          });
        case "GET_ALL_CANDIDATE_ERR":
          return({
            getAllCandidateResp:action.payload
          })
          case "RESET":
          return({
            getAllCandidateResp:""
          })
        default:
          return state;
      }
  };

  export const updateCandidate =  (state={
    updateCandidateResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_CANDIDATE":
          return ({
            updateCandidateResp: action.payload
          });
        case "UPDATE_CANDIDATE_ERR":
          return({
            updateCandidateResp:action.payload
          })
          case "RESET":
          return({
            updateCandidateResp:""
          })
        default:
          return state;
      }
  };

  export const deleteCandidate =  (state={
    deleteCandidateResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_CANDIDATE":
          return ({
            deleteCandidateResp: action.payload
          });
        case "DELETE_CANDIDATE_ERR":
          return({
            deleteCandidateResp:action.payload
          })
          case "RESET":
          return({
            deleteCandidateResp:""
          })
        default:
          return state;
      }
  };

  