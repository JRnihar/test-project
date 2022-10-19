import React, { useContext } from 'react';
import { PopupContext } from '../../../App';

const TitleTextBox = () => {
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
        <div class="form-floating">
            <textarea name="text"
                onBlur={(e) => handlePopupChange(e, "title", "text")} class="form-control w-100 mt-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            <label for="floatingTextarea2">Change text</label>
        </div>
    );
};

export default TitleTextBox;