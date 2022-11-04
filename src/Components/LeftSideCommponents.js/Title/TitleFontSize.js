import React, { useContext, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { PopupContext } from '../../../App';

const TitleFontSize = () => {
    const fontSize = [
        {
            value: '1rem',
            label: 'small',
        },
        {
            value: '2rem',
            label: 'large',
        },
        {
            value: '3rem',
            label: 'extra large',
        },

    ];
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
        <TextField
            id="outlined-select-currency"
            select
            label="Font Size"
            name="fontSize"
            // value={allValues.fontSize}
            onChange={(e) => handlePopupChange(e, "title", "fontSize")}
            helperText="Please select wait your fontSize"
        >
            {fontSize.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default TitleFontSize;