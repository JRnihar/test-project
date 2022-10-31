import React, { useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { PopupContext } from '../../App';
import DummyImg from '../../Assets/images/dummyImg.jpg';

const PopupCard = () => {
    const [allValues] = useContext(PopupContext);

    return (
        <Card style={{ width: '40rem', background: 'rgb(0,0,0,0.1)', height: '25rem' }}>
            <Card.Body>
                <div className="card p-2 align-items-center mt-4 shadow-lg  bg-body rounded">
                    <div className="row  ">
                        <div className="col-md-6">
                            <img className='img-fluid rounded mt-3' src={DummyImg} alt="" />
                        </div>
                        <div className="col-md-6">
                            {/* <h3 className='text-center'>Cartoon Images</h3> */}
                            <h1 style={{ fontSize: ` ${allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: ` ${allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${allValues?.sections[1].setting.customCSS.fontFamily}`, color: `${allValues?.sections[1].setting.customCSS.color}` }}>{allValues?.sections[1].setting.customCSS.text? allValues?.sections[1].setting.customCSS.text:'Cartoon Image'}</h1>
                            <p className='text-center'>We remeber those our old day</p>
                            <input class="form-control form-control-lg mt-3" type="text" placeholder="Exmaple@gmai.com" aria-label=".form-control-lg example" />
                            <div class="d-grid gap-2">
                                <button style={{ backgroundColor: `${allValues?.sections[4].setting.customCSS.backgroundColor}`, textAlign: ` ${allValues?.sections[4].setting.customCSS.textAlign}`, }} class="btn btn-success mt-3" type="button">{allValues?.sections[4].setting.customCSS.text ? allValues?.sections[4].setting.customCSS.text : 'Subcribe'}</button>
                            </div>
                            <p className='text-center mt-3'>*Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default PopupCard;