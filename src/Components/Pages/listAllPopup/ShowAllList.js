import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { VscDiffAdded } from "react-icons/vsc";

const ShowAllList = ({list}) => {
    const { _id, name, email, phone} = list
    const navigate = useNavigate();
    const navigateTOListDetails = id => {
        navigate(`/${id}`)
    }
    return (
        <div className="col  d-flex flex-column align-items-center justify-content-center h-100">
            <Card className='pt-2 pb-2 border-bottom-0  border-5 border border-dark  border-start-0 me-3  d-flex flex-column align-items-center justify-content-center shadow-lg  mt-5' style={{ width: '20rem', background:'#4d4d4f',borderRadius:"20px" }}>
                <img style={{ backgroundColor: '#4d4d4f', borderRadius: "20px" }} src={list.picture} class="figure-img img-fluid w-50 h-50  mt-3" alt="..."/>
                <Card.Body >
                    <p className='text-white '>Name    :  {name}</p>
                    <p className='text-white '> Email    :{email}</p>
                    <p className='text-white'> Phone    : {phone}</p>
                    <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
                        <button style={{ borderRadius: "20px", backgroundColor:"#00403D" }} onClick={() => navigateTOListDetails(_id)} className='btn text-white ps-3 pe-3'>Create  <VscDiffAdded className='fs-4'/></button>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowAllList;