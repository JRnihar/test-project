import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PopupContext } from "../../../App";
import auth from "../../../firebase.init";
import { postCutomerCard } from "../../../services/list.services";

const SendData = () => {
    const [allValues] = useContext(PopupContext);
    const { id } = useParams()
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const email = user?.email
    //post data
    const handleSubmit = async () => {
        const response = await postCutomerCard({ allValues, email: email });
        if (response) {
            navigate('/allList')
        }
        console.log(response.data);
    }

    return (
        <div class="gap-2 d-flex  align-items-center justify-content-center">
            <button className='btn btn-success mt-3 ms-auto ' ><Link to='/' className="text-white">Back</Link> </button>
            <button onClick={handleSubmit} className='btn btn-success mt-3 ms-3' >Save Data</button>
            {/* <button onClick={handleUpdate} className='btn btn-success mt-3 ms-3' >update</button> */}

        </div>
    );
};

export default SendData;