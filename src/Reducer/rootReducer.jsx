import { combineReducers } from "redux";
import {
    getUserByid,
    registerUser,
    getUserByEmail,
    updateUser,
    deleteUser
} from "./userReducer";
import {
    getAdminByid,
    registerAdmin,
    getAdminByEmail,
    updateAdmin,
    deleteAdmin
} from "./adminReducer";
import {
    castVote,
    getResults
}from "./voteReducer"

import {
    updateVoterReq,
  registerVoterReq,
  getAllVoterReq,
  getVoterReqByid
} from "./voterReqReducer"

import {
    
  getElectionByid,
  registerElection,
  getAllElection,
  updateElection,
  deleteElection
} from "./electionReducer"

import {
    deleteCandidate,
  updateCandidate,
  getAllCandidate,
  registerCandidate,
  getCandidateByid
} from "./candidateReducer"

import { 
    getPartyByid,
    registerParty,
    getAllParty,
    updateParty,
    deleteParty
 } from "./partyReducer";

 import {
  getElectrolOfficerByid,
  registerElectrolOfficer,
  getElectrolOfficerByEmail,
  updateElectrolOfficer,
  deleteElectrolOfficer
 } from "./electrolOfficerReducer"

const rootReducer = combineReducers({
    getUserByid,
    registerUser,
    getUserByEmail,
    updateUser,
    deleteUser,
    getAdminByid,
    registerAdmin,
    getAdminByEmail,
    updateAdmin,
    deleteAdmin,
    castVote,
    getResults,
    updateVoterReq,
    registerVoterReq,
    getAllVoterReq,
    getVoterReqByid,
    deleteCandidate,
    updateCandidate,
    getAllCandidate,
    registerCandidate,
    getCandidateByid,
    getElectionByid,
    registerElection,
    getAllElection,
    updateElection,
    deleteElection,
    getPartyByid,
    registerParty,
    getAllParty,
    updateParty,
    deleteParty,
    getElectrolOfficerByid,
    registerElectrolOfficer,
    getElectrolOfficerByEmail,
    updateElectrolOfficer,
    deleteElectrolOfficer
})

export default rootReducer;