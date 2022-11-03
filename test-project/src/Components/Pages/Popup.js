import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import DummyImg from '../../Assets/images/dummyImg.jpg';
import PopupCard from './PopupCard';
import TitleFontfamily from '../LeftSideCommponents.js/Title/TitleFontfamily';
import TitleFontSize from '../LeftSideCommponents.js/Title/TitleFontSize';
import TitleForntColor from '../LeftSideCommponents.js/Title/TitleForntColor';
import TitleAligment from '../LeftSideCommponents.js/Title/TitleAligment';
import SubtitleFornfamliy from '../LeftSideCommponents.js/SubTitle/SubtitleFornfamliy';
import SubtitleFontSize from '../LeftSideCommponents.js/SubTitle/SubtitleFontSize';
import SubTitleFontColor from '../LeftSideCommponents.js/SubTitle/SubTitleFontColor';
import SubTitleAligment from '../LeftSideCommponents.js/SubTitle/SubTitleAligment';
import ParagraphFrontfamliy from '../LeftSideCommponents.js/Paragraph/ParagraphFrontfamliy';
import ParagraphFontSize from '../LeftSideCommponents.js/Paragraph/ParagraphFontSize';
import ParagraphFontColor from '../LeftSideCommponents.js/Paragraph/ParagraphFontColor';
import ParagraphFontAligment from '../LeftSideCommponents.js/Paragraph/ParagraphFontAligment';
import ButtonFontFamliy from '../LeftSideCommponents.js/Button/ButtonFontFamliy';
import ButtonFontSize from '../LeftSideCommponents.js/Button/ButtonFontSize';
import ButtonFontColor from '../LeftSideCommponents.js/Button/ButtonFontColor';
import ButtonFontAligment from '../LeftSideCommponents.js/Button/ButtonFontAligment';
import ButtonTextBox from '../LeftSideCommponents.js/Button/ButtonTextBox';
import TitleTextBox from '../LeftSideCommponents.js/Title/TitleTextBox';
import SubTitleTextBox from '../LeftSideCommponents.js/SubTitle/SubTitleTextBox';
import ParagraphTextBox from '../LeftSideCommponents.js/Paragraph/ParagraphTextBox';

const Popup = () => {
    return (

        <div>
            <div className="row mt-5 ms-4">
                <div className="col-md-5 ">
                    <Accordion
                        defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> Edit Image</Accordion.Header>
                            <Accordion.Body className='d-flex  align-items-center justify-content-center'>
                                <img className='w-50 img-fluid rounded' src={DummyImg} alt="" srcset="" />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Edit Title</Accordion.Header>
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
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Edit Subtitle</Accordion.Header>
                            <Accordion.Body >
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <SubtitleFornfamliy />
                                        </div>
                                        <div className="col-md-6">
                                            <SubtitleFontSize />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <SubTitleFontColor />
                                        </div>
                                        <div className="col-md-6">
                                            <SubTitleAligment />
                                        </div>
                                    </div>
                                </div>
                                <SubTitleTextBox />
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Edit Button</Accordion.Header>
                            <Accordion.Body >
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ButtonFontFamliy />
                                        </div>
                                        <div className="col-md-6">
                                            <ButtonFontSize />
                                        </div>
                                    </div>
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
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Edit Paragraph</Accordion.Header>
                            <Accordion.Body >
                                <div className='d-flex flex-column align-items-center justify-content-center'>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ParagraphFrontfamliy />
                                        </div>
                                        <div className="col-md-6">
                                            <ParagraphFontSize />
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-md-6">
                                            <ParagraphFontColor />
                                        </div>
                                        <div className="col-md-6">
                                            <ParagraphFontAligment />
                                        </div>
                                    </div>
                                </div>
                                <ParagraphTextBox />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-7">
                    <PopupCard></PopupCard>
                </div>
            </div>
        </div>

    );
};

export default Popup;