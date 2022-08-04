import axios from "axios";
import constant from "../Component/constants.json"

export const castVote = (obj)=> async dispatch=> {
    await axios
      .post(constant.API_URL+"cast-vote/", obj)
    .then((resp)=>{
      dispatch({
        type:"CAST_VOTE",
        payload:resp.data
      })
      alert("vote casted")
    })
    .catch((err)=>{
      dispatch({
        type:"CAST_VOTE_ERR",
        payload:err.response
      })
      alert("failed to cast vote")
    });  
  };

  export const getResults = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'result/')
      .then((res)=>{
        dispatch({
          type:"GET_RESULT",
          payload:res
        })
      })
      .catch((err)=>{
        dispatch({
          type:"GET_RESULT_ERR",
          payload:err.response
        })
      });
  };