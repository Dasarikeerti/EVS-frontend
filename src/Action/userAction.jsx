import axios from 'axios';
import constant from '../Component/constants.json';

export const getUserByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'user/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_USER_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_USER_ID_ERR",
        payload:err.response
      })
    });
};

export const getUserByEmail = (email)=> async dispatch=> {
  axios
    .get(constant.API_URL+'user-by-email/'+email)
    .then((res)=>{
      dispatch({
        type:"GET_USER_EMAIL",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_USER_EMAIL_ERR",
        payload:err.response
      })
    });
};

export const registerUser = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"user/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_USER",
      payload:resp.data
    })
    alert("user registered please signin")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_USER_ERR",
      payload:err.response
    })
  });  
};

export const updateUser = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"user/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_USER",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_USER_ERR",
      payload:err.response
    })
  });  
};

export const deleteUser = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"user/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_USER",
      payload:resp.data
    })
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_USER_ERR",
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