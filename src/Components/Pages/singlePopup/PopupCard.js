import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { PopupContext } from '../../../App';
// import { PopupContext } from '../../App';
import DummyImg from '../../../Assets/images/dummyImg.jpg';
import { getAllCutomerCard, getListDetail, updateAllList } from '../../../services/list.services';

const PopupCard = () => {
    const [allValues] = useContext(PopupContext);
    const [singleList, setSingleList] = useState({});
    const { Id } = useParams();
    const loadListDetails = async (Id) => {
        try {
            const response = await getListDetail(Id);

            if (response) {
                setSingleList(response.data);
            }
        } catch (error) {
            return error;
        }
    };
    useEffect(() => {
        loadListDetails(Id);
    }, []);


    
    // console.log(service.data.name);

    return (
        <Card className='mb-5' style={{ width: '40rem', background: 'rgb(0,0,0,0.1)', height: '25rem' }}>
            <Card.Body>
                <div className="card pe-4 pt-3 align-items-center mt-4 shadow-lg  bg-body rounded">
                    <div className="row  ">
                        <div className="col-md-6">
                            <img className='img-fluid rounded mt-3' src={singleList?.data?.picture} alt="" />
                        </div>
                        <div className="col-md-6">
                            {/* <h3 className='text-center'>Cartoon Images</h3> */}
                            <h3 style={{ fontSize: ` ${allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: ` ${allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${allValues?.sections[1].setting.customCSS.fontFamily}`, color:`${allValues?.sections[1].setting.customCSS.color}` }}>{allValues?.sections[1].setting.customCSS.text ? allValues?.sections[1].setting.customCSS.text : singleList?.data?.name}</h3>
                            <p >Email : {singleList?.data?.email}</p>
                            <p >Phone : {singleList?.data?.phone}</p>
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