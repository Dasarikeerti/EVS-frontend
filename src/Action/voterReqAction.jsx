import axios from 'axios';
import constant from '../Component/constants.json';

export const getVoterReqByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'voterRequest/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_VOTER_REQUEST_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_VOTER_REQUEST_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllVoterReq = ()=> async dispatch=> {
    axios
      .get(constant.API_URL+'voterRequest/')
      .then((res)=>{
        dispatch({
          type:"GET_ALL_VOTER_REQUEST",
          payload:res
        })
      })
      .catch((err)=>{
        dispatch({
          type:"GET_ALL_VOTER_REQUEST_ID_ERR",
          payload:err.response
        })
      });
  };

export const registerVoterReq = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"voterRequest/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_VOTER_REQUEST",
      payload:resp.data
    })
    alert("voterRequest Generated please wait for the approval")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_VOTER_REQUEST_ERR",
      payload:err.response
    })
  });  
};

export const updateVoterReq = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"voterRequest/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_VOTER_REQUEST",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_VOTER_REQUEST_ERR",
      payload:err.response
    })
  });  
};

 