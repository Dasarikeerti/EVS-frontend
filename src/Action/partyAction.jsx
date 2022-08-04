import axios from 'axios';
import constant from '../Component/constants.json';

export const getPartyByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'party/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_PARTY_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_PARTY_ID_ERR",
        payload:err.response
      })
    });
};

export const getAllParty = ()=> async dispatch=> {
  axios
    .get(constant.API_URL+'party/')
    .then((res)=>{
      dispatch({
        type:"GET_ALL_PARTY",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ALL_PARTY_ERR",
        payload:err.response
      })
    });
};

export const registerParty = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"party/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_PARTY",
      payload:resp.data
    })
    alert("party Added")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_PARTY_ERR",
      payload:err.response
    })
    alert("party Adding failed")
  });  
};

export const updateParty = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"party/"+obj.partyId, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_PARTY",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_PARTY_ERR",
      payload:err.response
    })
    
    alert("failed to update");
  });  
};

export const deleteParty = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"party/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_PARTY",
      payload:resp.data
    })
    alert("deleted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_PARTY_ERR",
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