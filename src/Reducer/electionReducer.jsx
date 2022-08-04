export const getElectionByid =  (state={
    getElectionIdResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ELECTION_ID":
          return ({
            getElectionIdResp: action.payload
          });
        case "GET_ELECTION_ID_ERR":
          return({
            getElectionIdResp:action.payload
          })
          case "RESET":
          return({
            getElectionIdResp:""
          })
        default:
          return state;
      }
  };

  export const registerElection =  (
    state={
      registerElectionResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "REGISTER_ELECTION":
            return({
              registerElectionResp:action.payload
            })
          case "REGISTER_ELECTION_ERR":
          return({
            registerElectionResp:action.payload
          })
          case "RESET":
          return({
            registerElectionResp:""
          })
          default:
            return state;
        }
  };

  export const getAllElection =  (state={
    getAllElectionResp:""
  }, action) => {
      switch (action.type) {
        case "GET_ALL_ELECTION":
          return ({
            getAllElectionResp: action.payload
          });
        case "GET_ALL_ELECTION_ERR":
          return({
            getAllElectionResp:action.payload
          })
          case "RESET":
          return({
            getAllElectionResp:""
          })
        default:
          return state;
      }
  };

  export const updateElection =  (state={
    updateElectionResp:""
  }, action) => {
      switch (action.type) {
        case "UPDATE_ELECTION":
          return ({
            updateElectionResp: action.payload
          });
        case "UPDATE_ELECTION_ERR":
          return({
            updateElectionResp:action.payload
          })
          case "RESET":
          return({
            updateElectionResp:""
          })
        default:
          return state;
      }
  };

  export const deleteElection =  (state={
    deleteElectionResp:""
  }, action) => {
      switch (action.type) {
        case "DELETE_ELECTION":
          return ({
            deleteElectionResp: action.payload
          });
        case "DELETE_ELECTION_ERR":
          return({
            deleteElectionResp:action.payload
          })
          case "RESET":
          return({
            deleteElectionResp:""
          })
        default:
          return state;
      }
  };


