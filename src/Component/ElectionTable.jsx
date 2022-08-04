import React,{useState,useEffect} from "react"
import NavBarAdmin from "./NavAdmin";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import {getElectionByid,deleteElection,updateElection} from '../Action/ElectionAction';

const ElectionTable = () =>{
    
    const dispatch = useDispatch();
    const electionData = useSelector((state)=>state.getAllElection.getAllElectionResp.data)
    const electionDataById = useSelector((state)=>state.getElectionByid.getElectionIdResp.data)

    const [showUpdateElection,setShowUpdateElection] = useState(false);

    const saveEditElection = (obj) =>{
        const electionObj = {
            electionId: electionDataById.electionId,
            electionName: obj.electionName?obj.electionName : electionDataById.electionName,
            constituency: obj.constituency?obj.constituency : electionDataById.constituency,
            state: obj.state?obj.state : electionDataById.state,
            scheduleEntity: {
                id: electionDataById.electionId,
                electionName: obj.electionName?obj.electionName : electionDataById.electionName,
                electionDate: obj.date?obj.date : electionDataById.scheduleEntity.electionDate,
            }
        }
        dispatch(updateElection(electionObj));
    }

    const deleteElectionBtn = (id)=>{
            dispatch(deleteElection(id));
    }

    const UpdateElectionModal = (props) =>{
        const electionObj={
        }
        if(!electionDataById) return
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>update Election</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={electionDataById.electionName ? electionDataById.electionName : null}
                            onChange={(e)=>{electionObj.electionName=(e.target.value)}}
                        /><br />
                        <Form.Label>Constituency</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={electionDataById.constituency ? electionDataById.constituency : null}
                            onChange={(e)=>{electionObj.constituency=(e.target.value)}}
                        /><br />
                        <Form.Label>State</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={electionDataById.state ? electionDataById.state : null}
                            onChange={(e)=>{electionObj.state=(e.target.value)}}
                        /><br />
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={electionDataById.scheduleEntity ? electionDataById.scheduleEntity.electionDate : null}
                            onChange={(e)=>{electionObj.date=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{saveEditElection(electionObj);setShowUpdateElection(false)}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <UpdateElectionModal 
                show={showUpdateElection}
                onHide={()=>{setShowUpdateElection(false)}}
            />
            <h3>Elections</h3>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> Constituency</th>
                        <th> state</th>
                        <th> Date</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        electionData && electionData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.electionId}</td>
                                    <td>{val.electionName}</td>
                                    <td>{val.constituency}</td>
                                    <td>{val.state}</td>
                                    <td>{val.scheduleEntity? val.scheduleEntity.electionDate : null}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{dispatch(getElectionByid(val.electionId));setShowUpdateElection(true)}}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{deleteElectionBtn(val.electionId)}}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default ElectionTable;