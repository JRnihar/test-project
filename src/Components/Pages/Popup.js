import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import PopupCard from './PopupCard';
import TitleFontfamily from '../LeftSideCommponents.js/Title/TitleFontfamily';
import TitleFontSize from '../LeftSideCommponents.js/Title/TitleFontSize';
import TitleForntColor from '../LeftSideCommponents.js/Title/TitleForntColor';
import TitleAligment from '../LeftSideCommponents.js/Title/TitleAligment';
import ButtonFontColor from '../LeftSideCommponents.js/Button/ButtonFontColor';
import ButtonFontAligment from '../LeftSideCommponents.js/Button/ButtonFontAligment';
import ButtonTextBox from '../LeftSideCommponents.js/Button/ButtonTextBox';
import TitleTextBox from '../LeftSideCommponents.js/Title/TitleTextBox';
import SendData from './SendData';



const Popup = () => {  
    
    return (
        <div>
            <div className='d-flex  align-items-center justify-content-center'>
                <SendData />
            </div>
            <div className="row mt-5 ms-3">
                <div className="col-md-5 ">
                    <Accordion
                        defaultActiveKey={['0']} alwaysOpen>     
                        <Accordion.Item  eventKey="0">
                            <Accordion.Header >Edit Title</Accordion.Header>
                            <Accordion.Body >
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <TitleFontfamily />
                                        </div>
                                        <div className="col-md-6">
                                            <TitleFontSize />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <TitleForntColor />
                                        </div>
                                        <div className="col-md-6">
                                            <TitleAligment />
                                        </div>
                                    </div>
 
                                </div>
                                <TitleTextBox />
                            </Accordion.Body>
                        </Accordion.Item>
                       
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Edit Button</Accordion.Header>
                            <Accordion.Body >
                                <div className='d-flex flex-column align-items-center justify-content-center'>  
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <ButtonFontColor />
                                        </div>
                                        <div className="col-md-6">
                                            <ButtonFontAligment />
                                        </div>
                                    </div>
                                </div>
                                <ButtonTextBox />
                            </Accordion.Body>

                        </Accordion.Item>
                       
                    </Accordion>
                </div>
                <div className="col-md-7">
                    <PopupCard/>
                </div>
            
            </div>
        </div>

    );
};

export default Popup;