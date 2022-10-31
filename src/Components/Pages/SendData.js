import React, { useContext, useEffect } from 'react';
import { PopupContext } from '../../App';

const SendData = () => {
    const [allValues] = useContext(PopupContext);
    
    //get data
    useEffect(() => {
        fetch('http://localhost:5000/abc')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])
    //post data
    const handleSubmit = () => {
        fetch('http://localhost:5000/abc', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ allValues })
        }).then(res => res.json())
            .then(res => {
                alert('are you sure ,you want to add data?')
                console.log(res);
            });
    }

    return (
        <div class="gap-2">
            <button onClick={handleSubmit} className='btn btn-success mt-3' >Save Data</button>
        </div>
    );
};

export default SendData;