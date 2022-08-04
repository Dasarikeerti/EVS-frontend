import React, { useState, useEffect} from "react"
import {logout} from './../Action/userAction'
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { deleteAdmin,updateAdmin } from "../Action/adminAction";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';

const NavBarAdmin = ()=>{
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAdminUpdateModal,setShowAdminUpdateModal] = useState(false);
    const [name, setName] = useState("");
    const adminData = useSelector((state)=>state.getAdminByid.getAdminIdResp.data)

    const handleDeleteProfile = ()=>{
        console.log("delete profile");
        
        if (window.confirm('Are you sure you want to delete your account')) {
            dispatch(deleteAdmin(adminData.id));
            dispatch(logout());
            alert("you account is deleted and logged out");
            navigate('/');
      }  
    }

    const saveEditAdmin = (obj) =>{
        const newAdminObj = {
            id: adminData.id,
            email: obj.email ? obj.email : adminData.email ,
            password: obj.password ? obj.password : adminData.password 
        }
        dispatch(updateAdmin(newAdminObj));
        console.log(newAdminObj);
    }

    const AdminUpdateModal = (props) =>{
        const adminObj={
        }
        return(
            <Modal {...props}>
                <Modal.Header closeButton>
                <Modal.Title>Update Admin data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="Text"
                            autoFocus
                            placeholder={adminData? adminData.email : null}
                            onChange={(e)=>{adminObj.email=(e.target.value)}}
                        /><br />
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="Text"
                            placeholder={adminData? adminData.password : null}
                            onChange={(e)=>{adminObj.password=(e.target.value)}}
                        /><br />
                        
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary"  onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveEditAdmin(adminObj)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }

    useEffect(()=>{
        if(adminData && adminData.data)
           setName(adminData.data.name);
    },[adminData])

    return( 
        <>
            <AdminUpdateModal 
                show={showAdminUpdateModal}
                onHide={()=>{setShowAdminUpdateModal(false)}}
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
                            <Nav.Link disabled style={{ paddingLeft: '550px' }}>Admin {adminData?adminData.name:null}! Welcome</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{width:"150px"}}>
                                Profile  
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={()=>{setShowAdminUpdateModal(true)}}>Update Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={handleDeleteProfile}>Delete Profile</Dropdown.Item>
                                    <Dropdown.Item href="/">Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBarAdmin;