import React, { useContext, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { PopupContext } from '../../../App';

const TitleFontfamily = () => {
    const fontFamily = [
        {
            value: 'sans-serif',
            label: 'sans-serif',
        },
        {
            value: 'monospace',
            label: 'monospace',
        },
        {
            value: 'cursive ',
            label: 'cursive',
        },
        {
            value: 'fantasy ',
            label: 'fantasy',
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
            label="Font Family"
            name="fontFamily"
            // value={allValues.fontFamily}
            onBlur={(e) => handlePopupChange(e, "title", "fontFamily")}
            helperText="Please select wait your font Family"
        >
            {fontFamily.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default TitleFontfamily;