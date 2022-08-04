import React, { useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { getAllVoterReq } from "../Action/voterReqAction";
import { logout } from "../Action/userAction";
import { deleteElectrolOfficer, updateElectrolOfficer, getElectrolOfficerByid } from "../Action/electrolOfficerAction";

import VoterReqTable from "./VoterReqTable";

const ElectrolOfficer = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const EOData = useSelector((state)=>state.getElectrolOfficerByid.getElectrolOfficerIdResp.data)

    const [showVoterReqTable,setShowVoterReqTable]=useState(false);

    const [showEOUpdateModal,setShowEOUpdateModal] = useState(false);

    const handleDeleteProfile = ()=>{
        console.log("delete profile");
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteElectrolOfficer(EOData.id));
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditElectrolOfficer = (obj) =>{
        const newElectrolOfficerObj = {
            id: EOData.id,
            name: obj.name ? obj.name : EOData.name ,
            email: obj.email ? obj.email : EOData.email ,
            password: obj.password ? obj.password : EOData.password 
        }
        dispatch(updateElectrolOfficer(newElectrolOfficerObj));
        console.log(newElectrolOfficerObj);
        setShowEOUpdateModal(false);
    }

    const ElectrolOfficerUpdateModal = (props) =>{
        const electrolOfficerObj={
        }
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update ElectrolOfficer data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={EOData? EOData.name : null}
                            onChange={(e)=>{electrolOfficerObj.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={EOData? EOData.email : null}
                            onChange={(e)=>{electrolOfficerObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={EOData? EOData.password : null}
                            onChange={(e)=>{electrolOfficerObj.password=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditElectrolOfficer(electrolOfficerObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const handleRefresh = () =>{
        dispatch(getAllVoterReq());
        dispatch(getElectrolOfficerByid(EOData.id))
    }
    return (
        <>
            <ElectrolOfficerUpdateModal 
                show={showEOUpdateModal}
                onHide={()=>{setShowEOUpdateModal(false)}}
            />
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">Electronic Voting <a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link disabled style={{ paddingLeft: '550px' }}> {EOData?EOData.name:null}! Welcome</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                         <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowEOUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
                <br />
                <Row>
                <Col xs={2} >
                <div>
                    <Button variant="success"  style={{width:"150px"}} onClick={handleRefresh}>Refresh</Button><br /><br/>
                    <Button variant="success" style={{width:"150px"}} onClick={()=>{
                        handleRefresh(); 
                        setShowVoterReqTable(!showVoterReqTable)}}>View Vote Req</Button><br /><br/>
                </div>
                </Col>
                <Col xs={10}>
                <div>
                    {
                        showVoterReqTable?
                        <VoterReqTable />:
                        null
                    }
                </div>
                </Col>
            </Row>

        </>
    )
}

export default ElectrolOfficer;