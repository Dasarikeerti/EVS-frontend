import axios from 'axios';
import constant from '../Component/constants.json';

export const getCandidateByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'candidate/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_CANDIDATE_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_CANDIDATE_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllCandidate = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'candidate/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_CANDIDATE",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_CANDIDATE_ERR",
        payload:err.response
      })
    });
};

export const registerCandidate = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"candidate/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_CANDIDATE",
      payload:resp.data
    })
    alert("candidate Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_CANDIDATE_ERR",
      payload:err.response
    })
    alert("candidate Adding failed")
  });  
};

export const updateCandidate = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"candidate/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_CANDIDATE",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_CANDIDATE_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteCandidate = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"candidate/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_CANDIDATE",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_CANDIDATE_ERR",
      payload:err.response
    })
  });  
};
 
export const logout = ()=> async dispatch=> {
  dispatch({
    type:"RESET",
    payload:""
  })
};