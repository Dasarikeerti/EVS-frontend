import axios from 'axios';
import constant from '../Component/constants.json';

export const getAdminByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'admin/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_ADMIN_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ADMIN_ID_ERR",
        payload:err.response
      })
    });
};

export const getAdminByEmail = (email)=> async dispatch=> {
  axios
    .get(constant.API_URL+'admin-by-email/'+email)
    .then((res)=>{
      dispatch({
        type:"GET_ADMIN_EMAIL",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_ADMIN_EMAIL_ERR",
        payload:err.response
      })
    });
};

export const registerAdmin = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"admin/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_ADMIN",
      payload:resp.data
    })
    alert("admin registered please signin")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_ADMIN_ERR",
      payload:err.response
    })
    alert("admin registeration failed")
  });  
};

export const updateAdmin = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"admin/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_ADMIN",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_ADMIN_ERR",
      payload:err.response
    })
  });  
};

export const deleteAdmin = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"admin/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_ADMIN",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_ADMIN_ERR",
      payload:err.response
    })
  });  
};
 