import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ShowAllList = ({list}) => {
    const { _id, company, email, phone} = list
    const navigate = useNavigate();
    const navigateTOListDetails = id => {
        navigate(`/${id}`)
    }
    return (
        <div className="col  d-flex flex-column align-items-center justify-content-center h-100">
            <Card className='me-3 d-flex flex-column align-items-center justify-content-center shadow  rounded mt-5' style={{ width: '20rem', background:'#4d4d4f' }}>
                <img style={{backgroundColor: '#4d4d4f' }} src={list.picture} class="figure-img img-fluid w-50 h-50 rounded mt-3" alt="..."/>
                <Card.Body >
                    <Card.Title className='text-white'>Name : {company}</Card.Title>
                    <p className='text-white'>Email   : {email}</p>
                    <p className='text-white'>Phone   : {phone}</p>
                    <div className='d-flex flex-column align-items-center justify-content-center mt-4'>
                        <button onClick={() => navigateTOListDetails(_id)} className='btn btn-primary'>Create</button>
                    </div>
                    
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowAllList;