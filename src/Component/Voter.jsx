import React,{useRef,useEffect,useState} from "react"
import NavBar from './Nav'
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {castVote} from '../Action/voteAction';

const Voter = ()=>{

    const electionRef = useRef();
    const partyRef = useRef();
    const dispatch = useDispatch();
    const userData = useSelector((state)=>state.getUserByid.getUserIdResp.data)
    const resultsData = useSelector((state)=>state.getResults.resultsResp.data)
    const election = useSelector((state)=>state.getAllElection.getAllElectionResp.data)
    const voterReq = useSelector((state)=>state.getVoterReqByid.getVoterReqIdResp.data)
    const party = useSelector((state)=>state.getAllParty.getAllPartyResp.data)
    const [showResult,setShowResult] = useState(false);

    const handleCastVote = () =>{

        if(voterReq && voterReq.id==undefined){
            alert("please request for voter Request to cast vote");
            return;
        }

        if(voterReq && voterReq.applicationStatus!="ACCEPTED"){
            alert("cannot cast vote as you application status is "+voterReq.applicationStatus);
            return;
        }

        if(partyRef.current.value=="" || electionRef.current.value==""){
            alert("choose election and party to cast a vote")
            return;
        }

        const voteObj = {
            id:userData.id,
            voterName:userData.name,
            partyName:partyRef.current.value,
            electionName:electionRef.current.value
        }
        console.log(voteObj)
        dispatch(castVote(voteObj));
    }
    const Restable = () =>{
        return(
            <>
            <h3>Results</h3>
            <Table>
                <thead>
                    <tr>
                        <th> Election</th>
                        <th> Party </th>
                        <th>Total votes</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        resultsData && resultsData.map((res)=>{
                            return(
                                <tr>
                                    <td>{res[0]}</td>
                                    <td>{res[1]}</td>
                                    <td>{res[2]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </>
        )
    }
    
    useEffect(()=>{
        setShowResult(!showResult);
    },[resultsData])

    // useEffect(()=>{
    //     dispatch(getAllElection());
    //     dispatch(getVoterReqByid(userData.id));
    // },[1]);

    return(
        <>
            <NavBar/>
            <br/><br/>
            <Container>
                    <Row className="mx-1">
                        <Form.Select className="w-25 mx-0" inline ref ={electionRef}  >
                            <option value="">Choose election </option>
                            {
                                election && election.map((val)=>{
                                    return (<option value={val.electionName}>{val.electionName}</option>)
                                })  
                            }
                        </Form.Select>&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <Form.Control type="text" placeholder="ID" className="w-25" ref={searchInput}/>&nbsp;&nbsp; */}
                        <Form.Select className="w-25 mx-0" inline ref ={partyRef}  >
                            <option value="">Choose Party</option>
                            {
                                party && party.map((val)=>{
                                    return (<option value={val.partyName}>{val.partyName}</option>)
                                })
                            }
                        </Form.Select>&nbsp;&nbsp;
                        <Button variant="success" className="w-25" onClick={handleCastVote}>cast Vote</Button>
                            
                    </Row>
                    
            </Container><br/><br />
            {showResult?
                <Restable />
                : null
            }   
        </>
    )
}

export default Voter;