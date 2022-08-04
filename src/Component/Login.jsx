import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserByid,
  registerUser,
  getUserByEmail,
} from "../Action/userAction";
import {
  getAdminByid,
  registerAdmin,
  getAdminByEmail,
} from "../Action/adminAction";

import { getAllElection } from "../Action/ElectionAction";
import { getVoterReqByid } from "../Action/voterReqAction";
import {
  registerElectrolOfficer,
  getElectrolOfficerByEmail,
  getElectrolOfficerByid,
} from "../Action/electrolOfficerAction";

import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Form, Col } from "react-bootstrap";
import { getAllParty } from "../Action/partyAction";

const Login = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [contactInput, setContactInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [DOBInput, setDOBInput] = useState("");
  const [districtInput, setDistrictInput] = useState("");
  const [constituencyInput, setConstituencyInput] = useState("");

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEO, setIsEO] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const userLogin = useSelector(
    (state) => state.getUserByEmail.getUserEmailResp
  );
  const adminLogin = useSelector(
    (state) => state.getAdminByEmail.getAdminEmailResp
  );
  const eOLogin = useSelector(
    (state) => state.getElectrolOfficerByEmail.getElectrolOfficerEmailResp
  );

  let [authMode, setAuthMode] = useState("signin");

  const handleSignIn = async () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailInput || regex.test(emailInput) === false) {
      alert("Please Enter a valid Email");
      return;
    }

    if (isAdmin) {
      console.log("admin login", emailInput, passwordInput);
      dispatch(getAdminByEmail(emailInput));
    } else if (isUser) {
      dispatch(getUserByEmail(emailInput));
    } else {
      dispatch(getElectrolOfficerByEmail(emailInput));
    }
  };

  const handleSignUp = async () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!emailInput || regex.test(emailInput) === false) {
      alert("Please Enter a valid Email");
      return;
    }

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const passwordLength = passwordInput.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInput);
    const lowercasePassword = lowercaseRegExp.test(passwordInput);
    const digitsPassword = digitsRegExp.test(passwordInput);
    const specialCharPassword = specialCharRegExp.test(passwordInput);
    const minLengthPassword = minLengthRegExp.test(passwordInput);

    let errMsg = "";
    if (passwordLength === 0) {
      errMsg = "Password is empty";
    } else if (!uppercasePassword) {
      errMsg = "At least one Uppercase";
    } else if (!lowercasePassword) {
      errMsg = "At least one Lowercase";
    } else if (!digitsPassword) {
      errMsg = "At least one digit";
    } else if (!specialCharPassword) {
      errMsg = "At least one Special Characters";
    } else if (!minLengthPassword) {
      errMsg = "At least minumum 8 characters";
    } else {
      errMsg = "";
    }

    if (errMsg != "") {
      alert("password should contain " + errMsg);
      return;
    }

    if (isAdmin) {
      const obj = {
        email: emailInput,
        password: passwordInput,
      };
      dispatch(registerAdmin(obj));
      console.log("admin");
    } else if (isUser) {
      const obj = {
        name: nameInput,
        address: addressInput,
        gender: genderInput,
        contact: contactInput,
        district: districtInput,
        email: emailInput,
        password: passwordInput,
        dob: DOBInput,
        constituency: constituencyInput,
      };
      dispatch(registerUser(obj));
      console.log("user");
    } else {
      const obj = {
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      };
      dispatch(registerElectrolOfficer(obj));
      console.log("EO");
    }
    setAuthMode("signin");
  };

  useEffect(() => {
    if (
      userLogin.status == 200 &&
      userLogin.data &&
      userLogin.data[0].email == emailInput &&
      userLogin.data[0].password == passwordInput
    ) {
      dispatch(getUserByid(userLogin.data[0].id));
      dispatch(getAllElection());
      dispatch(getAllParty());
      dispatch(getVoterReqByid(userLogin.data[0].id));
      navigate("/voter");
    } else if (userLogin) {
      alert("User Login failed ");
    }
  }, [userLogin]);

  useEffect(() => {
    if (
      adminLogin.status == 200 &&
      adminLogin.data &&
      adminLogin.data[0].email == emailInput &&
      adminLogin.data[0].password == passwordInput
    ) {
      dispatch(getAdminByid(adminLogin.data[0].id));
      navigate("/admin");
    } else if (adminLogin) {
      alert("admin Login failed ");
    }
  }, [adminLogin]);

  useEffect(() => {
    if (
      eOLogin.status == 200 &&
      eOLogin.data &&
      eOLogin.data[0].email == emailInput &&
      eOLogin.data[0].password == passwordInput
    ) {
      dispatch(getElectrolOfficerByid(eOLogin.data[0].id));
      navigate("/electrol-officer");
    } else if (eOLogin) {
      alert("electrol officer Login failed ");
    }
  }, [eOLogin]);

  // useEffect(()=>{
  //   if(registerAdminData.data && registerAdminData.data.status!=201){
  //     alert("Admin couldn't register, message: "+registerAdminData.data.message);
  //   }
  //   else if(registerAdminData){
  //     alert("registration Success, Please Login");
  //     setAuthMode("signin")
  //   }

  // },[registerAdminData]);

  // useEffect(()=>{
  //   if(registerUserData.data && registerUserData.data.status!=201){
  //     alert("User couldn't register, message: "+registerUserData.data.message)
  //   }
  //   else if(registerUserData){
  //     alert("registration Success, Please Login");
  //     setAuthMode("signin")
  //   }
  // },[registerUserData]);

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="/">
              Electronic Voting <a href="/"></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <br />
              <Form.Check
                type="radio"
                id="user"
                label="User"
                name="role"
                inline={true}
                onChange={() => {
                  setIsUser(true);
                  setIsAdmin(false);
                  setIsEO(false);
                }}
              />
              <Form.Check
                type="radio"
                id="admin"
                label="Admin"
                name="role"
                inline={true}
                onChange={() => {
                  setIsAdmin(true);
                  setIsUser(false);
                  setIsEO(false);
                }}
              />
              <Form.Check
                type="radio"
                id="admin"
                label="ElectrolOfficer"
                name="role"
                inline={true}
                onChange={() => {
                  setIsEO(true);
                  setIsAdmin(false);
                  setIsUser(false);
                }}
              />
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button
                  type="button"
                  onClick={handleSignIn}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">
            Electronic Voting <a href="/"></a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ height: "100vh" }}>
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign Up</h3>
              <div className="text-center">
                Already registered?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign In
                </span>
                <br />
                <Form.Check
                  type="radio"
                  id="user"
                  label="User"
                  name="role"
                  inline={true}
                  onChange={() => {
                    setIsUser(true);
                    setIsAdmin(false);
                    setIsEO(false);
                  }}
                />
                <Form.Check
                  type="radio"
                  id="admin"
                  label="Admin"
                  name="role"
                  inline={true}
                  onChange={() => {
                    setIsAdmin(true);
                    setIsUser(false);
                    setIsEO(false);
                  }}
                />
                <Form.Check
                  type="radio"
                  id="admin"
                  label="ElectrolOfficer"
                  name="role"
                  inline={true}
                  onChange={() => {
                    setIsEO(true);
                    setIsAdmin(false);
                    setIsUser(false);
                  }}
                />
              </div>
              {isUser ? (
                <div>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="First Name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Contact</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="e.g 9192939495"
                      value={contactInput}
                      onChange={(e) => setContactInput(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label>Gender</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Gender"
                      value={genderInput}
                      onChange={(e) => setGenderInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email Address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>DOB</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="e.g 2022-12-26"
                      value={DOBInput}
                      onChange={(e) => setDOBInput(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Address"
                      value={addressInput}
                      onChange={(e) => setAddressInput(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label>District</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="District"
                      value={districtInput}
                      onChange={(e) => setDistrictInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Constituency</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Constituency"
                      value={constituencyInput}
                      onChange={(e) => setConstituencyInput(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}
              {isAdmin ? (
                <div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email Address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}
              {isEO ? (
                <div>
                  <div className="form-group mt-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="First Name"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      placeholder="Email Address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control mt-1"
                      placeholder="Password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                    />
                  </div>
                </div>
              ) : null}

              <div className="d-grid gap-2 mt-3">
                <button
                  type="button"
                  onClick={handleSignUp}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
