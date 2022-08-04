import React,{useState,useEffect} from "react"
import NavBarAdmin from "./NavAdmin";
import { Navbar,Container,Nav,Dropdown,Modal,Button,Form,Table,Row,Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import {getVoterReqByid,updateVoterReq} from '../Action/voterReqAction';
const VoterReqTable = () =>{
    
    const dispatch = useDispatch();
    const voterReqData = useSelector((state)=>state.getAllVoterReq.getAllVoterReqResp.data)
    const voterReqDataById = useSelector((state)=>state.getVoterReqByid.getVoterReqIdResp.data)

    const [showUpdateVoterReq,setShowUpdateVoterReq] = useState(false);

    return(
        <>
            <h3>Voter Requests</h3>
            <Table>
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Name</th>
                        <th> District</th>
                        <th> Constituency</th>
                        <th> Application Status</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        voterReqData && voterReqData.map((val)=>{
                            return(
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.district}</td>
                                    <td>{val.constituency}</td>
                                    <td>{val.applicationStatus}</td>
                                    <td>
                                        <Button variant="success"  onClick={()=>{
                                            val.applicationStatus="ACCEPTED";
                                            dispatch(updateVoterReq(val));
                                        }}>Accept</Button> &nbsp;&nbsp;
                                        <Button variant="danger"  onClick={()=>{
                                            val.applicationStatus="DECLINED";
                                            dispatch(updateVoterReq(val));
                                        }}>Reject</Button>
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

export default VoterReqTable;