import React, { useContext, useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { PopupContext } from '../../../App';

const ButtonFontAligment = () => {
    const textAlign
        = [
            {
                value: 'left',
                label: 'Left',
            },
            {
                value: 'center',
                label: 'Center',
            },
            {
                value: 'right',
                label: 'Right',
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
        <div>

            <TextField
                id="outlined-select-currency"
                select
                label="TextAlign
"
                name="textAlign
"
                // value={allValues.fontFamily}
                onChange={(e) => handlePopupChange(e, "button", "textAlign")}
                helperText="Please select wait your font Family"
            >
                {
                    textAlign
                        .map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                }
            </TextField>
        </div >

    );
};

export default ButtonFontAligment;