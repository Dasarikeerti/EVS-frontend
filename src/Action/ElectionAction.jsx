import axios from "axios";
import constant from "../Component/constants.json";

export const getElectionByid = (id) => async (dispatch) => {
  axios
    .get(constant.API_URL + "election/" + id)
    .then((res) => {
      dispatch({
        type: "GET_ELECTION_ID",
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_ELECTION_ID_ERR",
        payload: err.response,
      });
    });
};

export const getAllElection = () => async (dispatch) => {
  axios
    .get(constant.API_URL + "election/")
    .then((res) => {
      dispatch({
        type: "GET_ALL_ELECTION",
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_ALL_ELECTION_ERR",
        payload: err.response,
      });
    });
};

export const registerElection = (obj) => async (dispatch) => {
  await axios
    .post(constant.API_URL + "election/", obj)
    .then((resp) => {
      dispatch({
        type: "REGISTER_ELECTION",
        payload: resp.data,
      });
      alert("election Added");
    })
    .catch((err) => {
      dispatch({
        type: "REGISTER_ELECTION_ERR",
        payload: err.response,
      });
      alert("election Adding failed");
    });
};

export const updateElection = (obj) => async (dispatch) => {
  await axios
    .put(constant.API_URL + "election/" + obj.electionId, obj)
    .then((resp) => {
      dispatch({
        type: "UPDATE_ELECTION",
        payload: resp.data,
      });
      alert("updated");
    })
    .catch((err) => {
      dispatch({
        type: "UPDATE_ELECTION_ERR",
        payload: err.response,
      });

      alert("failed to update");
    });
};

export const deleteElection = (id) => async (dispatch) => {
  await axios
    .delete(constant.API_URL + "election/" + id)
    .then((resp) => {
      dispatch({
        type: "DELETE_ELECTION",
        payload: resp.data,
      });
      alert("deleted");
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_ELECTION_ERR",
        payload: err.response,
      });
    });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: "RESET",
    payload: "",
  });
};
