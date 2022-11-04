import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { deleteCutomerCard } from '../../services/list.services';

const SeeCustomerList = ({list}) => {
    const { _id } = list
    const [user] = useAuthState(auth)
    const email = user?.email
    const handleDelete = async (id) => {
                const response = await deleteCutomerCard(id);
                console.log(response.data);
        };
    return (
        <div className='col p-3 mt-5'>
            <Card className='w-100 h-100' >
                <Card.Body  >
                    <p style={{ fontSize: ` ${list?.allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: ` ${list?.allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${list.allValues?.sections[1].setting.customCSS.fontFamily}`, color: `${list.allValues?.sections[1].setting.customCSS.color}` }}>Name : {list?.allValues?.sections[1].setting?.customCSS?.text}</p>
                    <p>Email : {email}</p>
                    <div class="d-grid gap-2">
                        <button style={{ backgroundColor: `${list?.allValues?.sections[4].setting.customCSS.backgroundColor}`, textAlign: ` ${list?.allValues?.sections[4].setting.customCSS.textAlign}`, }} class="btn btn-success mt-3" type="button">{list?.allValues?.sections[4].setting.customCSS.text ? list?.allValues?.sections[4].setting.customCSS.text : 'Subcribe'}</button>
                    </div>
                    <button className='btn btn-danger mt-5' onClick={() => handleDelete(_id)}>Delete</button>
                    <button className='btn btn-success mt-5 ms-3'>Update</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SeeCustomerList;