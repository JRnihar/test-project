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
        <div className='border p-2 shadow rounded'>
            <label htmlFor="">Title Font Color</label>
            <input onBlur={(e) => handlePopupChange(e, "title", "color")} className='mt-2 w-full'  type="color" name="" id="" />
           
        </div>
    );
};

export default TitleForntColor;