import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getAllList } from '../../../services/list.services';
import DiscountModal from './DiscountModal';

import ShowAllList from './ShowAllList';

const PopupList = () => {
    
    const[lists,setList]=useState()
    useEffect(() => {
        loadAllData();   
    }, []);

    const loadAllData = async () => {
        try {
            const response = await getAllList();
            
            if (response) {
                setList(response.data);
            }
        } catch (error) {
            return error;
        }
    };
        
    return (
        <div className='bg-black'>
           
           <div className="container  ">
                <DiscountModal /> 
                <div className="row row-cols-1 row-cols-md-3 g-3">    
                    {
                        lists?.data?.map(list=><ShowAllList list={list}/>)
                    }    
            </div>
            </div> 
        </div>
    );
};

export default PopupList;