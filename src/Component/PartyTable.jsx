import React,{useState,useEffect} from "react"
import NavBarAdmin from "./NavAdmin";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import {getPartyByid,deleteParty,updateParty} from '../Action/partyAction';
const PartyTable = () =>{
    
    const dispatch = useDispatch();
    const partyData = useSelector((state)=>state.getAllParty.getAllPartyResp.data)
    const partyDataById = useSelector((state)=>state.getPartyByid.getPartyIdResp.data)

    const [showUpdateParty,setShowUpdateParty] = useState(false);

    const saveEditParty = (obj) =>{
        const partyObj = {
            partyId: partyDataById.partyId,
            partyName: obj.partyName ? obj.partyName: partyDataById.partyName,
            leader: obj.leader ? obj.leader: partyDataById.leader,
            symbol: obj.symbol ? obj.symbol: partyDataById.symbol,
            candidateEntity: {
              id: partyDataById.candidateEntity.id,
              name: obj.leader ? obj.leader: partyDataById.leader,
              address: obj.address ? obj.address: partyDataById.candidateEntity.address,
              party: obj.partyName ? obj.partyName: partyDataById.partyName,
              age: obj.age ? obj.age: partyDataById.candidateEntity.age,
              contact: obj.contact ? obj.contact: partyDataById.candidateEntity.contact,
            }
          }
        dispatch(updateParty(partyObj));
    }
    const deletePartyBtn = (id)=>{
            dispatch(deleteParty(id));
    }

    const UpdatePartyModal = (props) =>{
        const partyObj={
        }
        if(!partyDataById) return
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Party</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Party Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={partyDataById.partyName}
                            onChange={(e)=>{partyObj.partyName=(e.target.value)}}
                        /><br />
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={partyDataById.symbol }
                            onChange={(e)=>{partyObj.symbol=(e.target.value)}}
                        /><br />
                        <Form.Label>Candidate Name</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={partyDataById.leader}
                            onChange={(e)=>{partyObj.leader=(e.target.value)}}
                        /><br />
                        <Form.Label>Candidate Address</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={partyDataById.candidateEntity ? partyDataById.candidateEntity.address : null}
                            onChange={(e)=>{partyObj.address=(e.target.value)}}
                        /><br />
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={partyDataById.candidateEntity ? partyDataById.candidateEntity.age : null}
                            onChange={(e)=>{partyObj.age=(e.target.value)}}
                        /><br />
                        
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={partyDataById.candidateEntity ? partyDataById.candidateEntity.contact : null}
                            onChange={(e)=>{partyObj.contact=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>{saveEditParty(partyObj);setShowUpdateParty(false)}}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    return(
        <>
            <UpdatePartyModal 
                show={showUpdateParty}
                onHide={()=>{setShowUpdateParty(false)}}
            />
            <h3>Parties</h3>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Party Name</th>
                        <th> Symbol</th>
                        <th> Candidate Name</th>
                        <th> Candidate Address</th>
                        <th> age</th>
                        <th> Contact</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        partyData && partyData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.partyId}</td>
                                    <td>{val.partyName}</td>
                                    <td>{val.symbol}</td>
                                    <td>{val.candidateEntity?val.candidateEntity.name:null}</td>
                                    <td>{val.candidateEntity?val.candidateEntity.address:null}</td>
                                    <td>{val.candidateEntity?val.candidateEntity.age:null}</td>
                                    <td>{val.candidateEntity?val.candidateEntity.contact:null}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{dispatch(getPartyByid(val.partyId));setShowUpdateParty(true)}}>Edit</Button> &nbsp;&nbsp;
                                        <Button variant="success"  onClick={()=>{deletePartyBtn(val.partyId)}}>Delete</Button>
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

export default PartyTable;