import React,{useState,useEffect} from "react"
import NavBarAdmin from "./NavAdmin";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import {getCandidateByid,deleteCandidate,updateCandidate} from '../Action/candidateAction';
const CandidateTable = () =>{
    
    const dispatch = useDispatch();
    const candidateData = useSelector((state)=>state.getAllCandidate.getAllCandidateResp.data)
    const candidateDataById = useSelector((state)=>state.getCandidateByid.getCandidateIdResp.data)

    const [showUpdateCandidate,setShowUpdateCandidate] = useState(false);

    const saveEditCandidate = (obj) =>{
        const candidateObj = {
            id : candidateDataById.id,
            name : obj.name? obj.name: candidateDataById.name,
            address: obj.address? obj.address: candidateDataById.address,
            party : obj.party? obj.party: candidateDataById.party,
            age : obj.age? obj.age: candidateDataById.age,
            contact : obj.contact? obj.contact: candidateDataById.contact,
        }
        dispatch(updateCandidate(candidateObj));
    }
    const deleteCandidateBtn = (id)=>{
            dispatch(deleteCandidate(id));
    }

    const UpdateCandidateModal = (props) =>{
        const candidateObj={
        }
        if(!candidateDataById) return
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>update Candidate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={candidateDataById.name ? candidateDataById.name : null}
                            onChange={(e)=>{candidateObj.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Party</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={candidateDataById.party ? candidateDataById.party : null}
                            onChange={(e)=>{candidateObj.party=(e.target.value)}}
                        /><br />
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={candidateDataById.age ? candidateDataById.age : null}
                            onChange={(e)=>{candidateObj.age=(e.target.value)}}
                        /><br />
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={candidateDataById.contact ? candidateDataById.contact : null}
                            onChange={(e)=>{candidateObj.contact=(e.target.value)}}
                        /><br />
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={candidateDataById.address ? candidateDataById.address : null}
                            onChange={(e)=>{candidateObj.address=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{saveEditCandidate(candidateObj);setShowUpdateCandidate(false)}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <UpdateCandidateModal 
                show={showUpdateCandidate}
                onHide={()=>{setShowUpdateCandidate(false)}}
            />
            <h3>Candidates</h3>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> Age</th>
                        <th> Party</th>
                        <th> Contact</th>
                        <th> Address</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidateData && candidateData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.age}</td>
                                    <td>{val.party}</td>
                                    <td>{val.contact}</td>
                                    <td>{val.address}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{dispatch(getCandidateByid(val.id));setShowUpdateCandidate(true)}}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{deleteCandidateBtn(val.id)}}>Delete</Button>
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

export default CandidateTable;