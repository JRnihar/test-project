import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const DiscountModal = () => {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
   
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Hurrah!!! we have a Discount...</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="d-flex justify-content-center align-items-center">
                    <div class="card shadow">
                            <div class="text-center text-uppercase off">
                                <span>Flat</span>
                                <h1 class="mt-0">50%</h1>
                            </div>
                            <div class="text-center ">
                                <span class="plus">+</span>
                            </div>
                            <div class="text-center text-uppercase">
                                <h3 class="m-0">10% OFF</h3>

                            </div>
                            <div class="px-5 mb-3">
                                <div class="card p-3 text-center mt-4">
                                    <span className='text-success'>Use code : Extra10</span>
                                </div>
                            </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DiscountModal;