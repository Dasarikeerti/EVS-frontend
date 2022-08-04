import axios from 'axios';
import constant from '../Component/constants.json';

export const getElectrolOfficerByid = (id)=> async dispatch=> {
  axios
    .get(constant.API_URL+'/EO/electrolOfficer/'+id)
    .then((res)=>{
      dispatch({
        type:"GET_ELECTROLOFFICER_ID",
        payload:res
      })
    })
    .catch((err)=>{
      dispatch({
        type:"GET_ELECTROLOFFICER_ID_ERR",
        payload:err.response
      })
    });
};

export const getElectrolOfficerByEmail = (email)=> async dispatch=> {
  axios
    .get(constant.API_URL+'/EO/electrolOfficer-by-email/'+email)
    .then((res)=>{
      dispatch({
        type:"GET_ELECTROLOFFICER_EMAIL",
        payload:res
      })

    })
    .catch((err)=>{
      dispatch({
        type:"GET_ELECTROLOFFICER_EMAIL_ERR",
        payload:err.response
      })
    });
};

export const registerElectrolOfficer = (obj)=> async dispatch=> {
  await axios
    .post(constant.API_URL+"/EO/electrolOfficer/", obj)
  .then((resp)=>{
    dispatch({
      type:"REGISTER_ELECTROLOFFICER",
      payload:resp.data
    })
    alert("electrolOfficer registered please signin")
  })
  .catch((err)=>{
    dispatch({
      type:"REGISTER_ELECTROLOFFICER_ERR",
      payload:err.response
    })
    alert("electrolOfficer registeration failed")
  });  
};

export const updateElectrolOfficer = (obj)=> async dispatch=> {
  await axios
    .put(constant.API_URL+"/EO/electrolOfficer/"+obj.id, obj)
  .then((resp)=>{
    dispatch({
      type:"UPDATE_ELECTROLOFFICER",
      payload:resp.data
    })
    alert("updated");
  })
  .catch((err)=>{
    dispatch({
      type:"UPDATE_ELECTROLOFFICER_ERR",
      payload:err.response
    })
  });  
};

export const deleteElectrolOfficer = (id)=> async dispatch=> {
  await axios
    .delete(constant.API_URL+"/EO/electrolOfficer/"+id,)
  .then((resp)=>{
    dispatch({
      type:"DELETE_ELECTROLOFFICER",
      payload:resp.data
    })
    alert("delted");
  })
  .catch((err)=>{
    dispatch({
      type:"DELETE_ELECTROLOFFICER_ERR",
      payload:err.response
    })
  });  
};
 