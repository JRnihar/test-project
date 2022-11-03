import React from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { AiOutlineAlignCenter } from 'react-icons/ai';
import { AiOutlineAlignRight } from 'react-icons/ai';

const ButtonFontAligment = () => {
    return (
        <div className='border p-2 shadow rounded'>
            <label htmlFor="">Title Aligment</label><br />
            <div className='mt-3'>
                <AiOutlineAlignLeft className='fs-5 ' />
                <AiOutlineAlignCenter className='fs-5 ms-2' />
                <AiOutlineAlignRight className='fs-5 ms-2' />
            </div>
        </div>
    );
};

export default ButtonFontAligment;