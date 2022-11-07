import React, { useContext, useState } from 'react';
import { PopupContext } from '../../../App';

const TitleForntColor = () => {
    const [allValues, setAllValues] = useContext(PopupContext);


    const handlePopupChange = (e, type, property) => {
        const value = e.target.value;
        
        const tempPopupValues = [...allValues.sections];
        const index = tempPopupValues.findIndex(item => item.type === type);

        if (index !== -1) {
            tempPopupValues[index] = {
                ...tempPopupValues[index],
                setting: {
                    ...tempPopupValues[index].setting,
                    customCSS: {
                        ...tempPopupValues[index].setting.customCSS,
                        [property]: value
                    }
                }
            }
        }
        setAllValues({ ...allValues, sections: tempPopupValues });

    }

    return (
        <div className='border p-3 shadow-sm rounded d-flex flex-cloumn justify-content-center align-items-center'>
            <label htmlFor="">Title Font Color</label>
            <input onChange={(e) => handlePopupChange(e, "title", "color")} className=' w-full ms-3'  type="color" name="" id="" />
           
        </div>
    );
};

export default TitleForntColor;