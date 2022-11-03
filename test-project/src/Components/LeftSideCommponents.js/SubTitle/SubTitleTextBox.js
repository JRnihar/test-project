import React from 'react';

const SubTitleTextBox = () => {
    return (
        <div class="form-floating">
            <textarea class="form-control w-100 mt-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            <label for="floatingTextarea2">Change text</label>
        </div>
    );
};

export default SubTitleTextBox;