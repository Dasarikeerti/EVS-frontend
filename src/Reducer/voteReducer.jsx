export const castVote =  (
    state={
      castVoteResp:""
    }, 
    action
    ) => {
        switch (action.type) {
          case "CAST_VOTE":
            return({
                castVoteResp:action.payload
            })
          case "CAST_VOTE_ERR":
          return({
            castVoteResp:action.payload
          })
          case "RESET":
          return({
            castVoteResp:""
          })
          default:
            return state;
        }
  };
  
export const getResults =  (state={
    resultsResp:""
  }, action) => {
      switch (action.type) {
        case "GET_RESULT":
          return ({
            resultsResp: action.payload
          });
        case "GET_RESULT_ERR":
          return({
            resultsResp:action.payload
          })
          case "RESET":
          return({
            resultsResp:""
          })
        default:
          return state;
      }
  };