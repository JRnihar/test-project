import React from 'react';
import Card from 'react-bootstrap/Card';
import DummyImg from '../../Assets/images/dummyImg.jpg';

const PopupCard = () => {
    return (
        <Card style={{ width: '45rem', background: 'rgb(0,0,0,0.1)', height: '25rem' }}>
            <Card.Body>
                <div className="card p-2 align-items-center mt-4 shadow-lg  bg-body rounded">
                    <div className="row  ">
                        <div className="col-md-6">
                            <img className='img-fluid rounded mt-3' src={DummyImg} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 className='text-center'>Cartoon Images</h3>
                            <p className='text-center'>We remeber those our old day</p>
                            <input class="form-control form-control-lg mt-3" type="text" placeholder="Exmaple@gmai.com" aria-label=".form-control-lg example" />
                            <div class="d-grid gap-2">
                                <button class="btn btn-success mt-3" type="button">Subscribe</button>
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