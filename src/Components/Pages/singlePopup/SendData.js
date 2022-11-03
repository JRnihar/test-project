import { useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { PopupContext } from "../../../App";
import auth from "../../../firebase.init";

const SendData = () => {
    const [allValues] = useContext(PopupContext);
    const [user] = useAuthState(auth)
    const email=user?.email
    //get data
    useEffect(() => {
        fetch('http://localhost:5000/api/v1/test')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])
    //post data
    const handleSubmit = () => {
        fetch('http://localhost:5000/api/v1/test', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ allValues ,email:email})
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