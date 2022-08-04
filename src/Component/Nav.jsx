import React, { useState, useEffect} from "react"
import {logout} from './../Action/userAction'
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { deleteUser,updateUser } from "../Action/userAction";
import {getResults} from "../Action/voteAction";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import {registerVoterReq} from "../Action/voterReqAction";

import { getAllElection } from "../Action/ElectionAction";
import {getVoterReqByid} from "../Action/voterReqAction";
import { getAllParty } from "../Action/partyAction";


const NavBar = ()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showUserUpdateModal,setShowUserUpdateModal] = useState(false);
    const [name, setName] = useState("");
    const userData = useSelector((state)=>state.getUserByid.getUserIdResp.data)

    const handleDeleteProfile = ()=>{
        console.log("delete profile");
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteUser(userData.id));
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditUser = (obj) =>{
        const newUserObj = {
            id: userData.id,
            name: obj.name ? obj.name : userData.name ,
            address: obj.address ? obj.address : userData.address ,
            gender: obj.gender ? obj.gender : userData.gender ,
            contact: obj.contact ? obj.contact : userData.contact ,
            district: obj.district ? obj.district : userData.district ,
            email: obj.email ? obj.email : userData.email ,
            password: obj.password ? obj.password : userData.password ,
            dob: obj.dob ? obj.dob : userData.dob 
        }
        dispatch(updateUser(newUserObj));
        console.log(newUserObj);
    }

    const UserUpdateModal = (props) =>{
        const userObj={
        }
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update User data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={userData? userData.name : null}
                            onChange={(e)=>{userObj.name=(e.target.value)}}
                        /><br />
                        <Form.Label>Gender</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.gender : null}
                            onChange={(e)=>{userObj.gender=(e.target.value)}}
                        /><br />
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.address : null}
                            onChange={(e)=>{userObj.address=(e.target.value)}}
                        /><br />
                        <Form.Label>District</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.district : null}
                            onChange={(e)=>{userObj.district=(e.target.value)}}
                        /><br />
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.contact : null}
                            onChange={(e)=>{userObj.contact=(e.target.value)}}
                        /><br />
                        <Form.Label>DOB</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.dob : null}
                            onChange={(e)=>{userObj.dob=(e.target.value)}}
                        /><br />
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.email : null}
                            onChange={(e)=>{userObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={userData? userData.password : null}
                            onChange={(e)=>{userObj.password=(e.target.value)}}
                        /><br />
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditUser(userObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    const generateVoterReq = ()=>{
        const obj = {
            id:userData.id,
            name:userData.name,
            district:userData.district,
            constituency:userData.constituency? userData.constituency :  "VB",
            applicationStatus:"PENDING"
        }
        dispatch(registerVoterReq(obj));
        console.log(obj);
    }

    useEffect(()=>{
        if(userData && userData.data)
           setName(userData.data.name);
    },[userData])

    const handleRefresh = ()=>{
        dispatch(getAllElection());
        dispatch(getVoterReqByid(userData.id));
        dispatch(getAllParty());
    }

    return( 
        <>
            <UserUpdateModal 
                show={showUserUpdateModal}
                onHide={()=>{setShowUserUpdateModal(false)}}
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
                            <Nav.Link onClick={()=>{dispatch(getResults())}}>View Results</Nav.Link>
                            <Nav.Link onClick={generateVoterReq}>Voter Request</Nav.Link>
                            <Nav.Link onClick={handleRefresh}>Refresh</Nav.Link>
                            <Nav.Link disabled style={{ paddingLeft: '300px' }}>Hi {userData?userData.name:null}! Welcome</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowUserUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBar;