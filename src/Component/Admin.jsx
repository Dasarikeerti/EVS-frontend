import React, { useState, useEffect } from "react";
import NavBarAdmin from "./NavAdmin";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Modal,
  Button,
  Form,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CandidateTable from "./CandidateTable";
import ElectionTable from "./ElectionTable";
import VoterReqTable from "./VoterReqTable";
import { getAllCandidate, registerCandidate } from "../Action/candidateAction";
import { getAllElection, registerElection } from "../Action/ElectionAction";
import { getAllVoterReq } from "../Action/voterReqAction";
import { getAllParty, registerParty } from "../Action/partyAction";
import PartyTable from "./PartyTable";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showCandidateAddModal, setShowCandidateAddModal] = useState(false);
  const [showCandidateTable, setShowCandidateTable] = useState(false);
  const [showElectionModal, setshowElectionModal] = useState(false);
  const [showElectionTable, setShowElectionTable] = useState(false);
  const [showPartyModal, setshowPartyModal] = useState(false);
  const [showPartyTable, setShowPartyTable] = useState(false);
  const [showVoterReqTable, setShowVoterReqTable] = useState(false);

  const AddCandidateModal = (props) => {
    const candidateObj = {};
    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Add Candidate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Text"
              autoFocus
              placeholder="Name"
              onChange={(e) => {
                candidateObj.name = e.target.value;
              }}
            />
            <br />
            <Form.Label>Party</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Party"
              onChange={(e) => {
                candidateObj.party = e.target.value;
              }}
            />
            <br />
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Age"
              onChange={(e) => {
                candidateObj.age = e.target.value;
              }}
            />
            <br />
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Contact"
              onChange={(e) => {
                candidateObj.contact = e.target.value;
              }}
            />
            <br />
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Address"
              onChange={(e) => {
                candidateObj.address = e.target.value;
              }}
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(registerCandidate(candidateObj));
              setShowCandidateAddModal(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const AddElectionModal = (props) => {
    const electionObj = {
      scheduleEntity: {},
    };
    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Add Election</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Text"
              autoFocus
              placeholder="Name"
              onChange={(e) => {
                electionObj.electionName = e.target.value;
                electionObj.scheduleEntity.electionName = e.target.value;
              }}
            />
            <br />
            <Form.Label>Constituency</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Constituency"
              onChange={(e) => {
                electionObj.constituency = e.target.value;
              }}
            />
            <br />
            <Form.Label>State</Form.Label>
            <Form.Control
              type="Text"
              placeholder="State"
              onChange={(e) => {
                electionObj.state = e.target.value;
              }}
            />
            <br />
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="Text"
              placeholder="E.g 2022-12-24"
              onChange={(e) => {
                electionObj.scheduleEntity.electionDate = e.target.value;
              }}
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(registerElection(electionObj));
              setshowElectionModal(false);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const AddPartyModal = (props) => {
    const partyObj = {
      candidateEntity: {},
    };
    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Add Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Party Name</Form.Label>
            <Form.Control
              type="Text"
              autoFocus
              placeholder="Party Name"
              onChange={(e) => {
                partyObj.partyName = e.target.value;
                partyObj.candidateEntity.party = e.target.value;
              }}
            />
            <br />
            <Form.Label>Symbol</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Symbol"
              onChange={(e) => {
                partyObj.symbol = e.target.value;
              }}
            />
            <br />
            <Form.Label>Candidate Name</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Leader"
              onChange={(e) => {
                partyObj.leader = e.target.value;
                partyObj.candidateEntity.name = e.target.value;
              }}
            />
            <br />
            <Form.Label>Candidate Address</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Address"
              onChange={(e) => {
                partyObj.candidateEntity.address = e.target.value;
              }}
            />
            <br />
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Age"
              onChange={(e) => {
                partyObj.candidateEntity.age = e.target.value;
              }}
            />
            <br />
            <Form.Label>Contact</Form.Label>
            <Form.Control
              type="Text"
              placeholder="Contact"
              onChange={(e) => {
                partyObj.candidateEntity.contact = e.target.value;
              }}
            />
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(registerParty(partyObj));
              setshowPartyModal(false);
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const handleRefresh = () => {
    dispatch(getAllCandidate());
    dispatch(getAllElection());
    dispatch(getAllVoterReq());
    dispatch(getAllParty());
  };

  return (
    <>
      <AddCandidateModal
        show={showCandidateAddModal}
        onHide={() => {
          setShowCandidateAddModal(false);
        }}
      />
      <AddElectionModal
        show={showElectionModal}
        onHide={() => {
          setshowElectionModal(false);
        }}
      />
      <AddPartyModal
        show={showPartyModal}
        onHide={() => {
          setshowPartyModal(false);
        }}
      />
      <NavBarAdmin />
      <br />
      <Row>
        <Col xs={2}>
          <div>
            <Button
              variant="success"
              style={{ width: "150px" }}
              onClick={handleRefresh}
            >
              Refresh
            </Button>
            <br />
            <br />
            {/* <Button variant="success"  style={{width:"150px"}} onClick={()=>{setShowCandidateAddModal(true)}}>Add Candidates</Button><br /><br/>
                    <Button variant="success"  style={{width:"150px"}} onClick={()=>{handleRefresh();setShowCandidateTable(!showCandidateTable)}}>View Candidates</Button><br /><br/> */}
            <Button
              variant="success"
              style={{ width: "150px" }}
              onClick={() => {
                setshowElectionModal(true);
              }}
            >
              Schedule Election
            </Button>
            <br />
            <br />
            <Button
              variant="success"
              style={{ width: "150px" }}
              onClick={() => {
                handleRefresh();
                setShowElectionTable(!showElectionTable);
              }}
            >
              View Election
            </Button>
            <br />
            <br />
            <Button
              variant="success"
              style={{ width: "150px" }}
              onClick={() => {
                setshowPartyModal(true);
              }}
            >
              Add Party
            </Button>
            <br />
            <br />
            <Button
              variant="success"
              style={{ width: "150px" }}
              onClick={() => {
                handleRefresh();
                setShowPartyTable(!showPartyTable);
              }}
            >
              View Paties
            </Button>
            <br />
            <br />
          </div>
        </Col>
        <Col xs={10}>
          <div>
            {showCandidateTable ? <CandidateTable /> : null}
            {showElectionTable ? <ElectionTable /> : null}
            {showPartyTable ? <PartyTable /> : null}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Admin;
