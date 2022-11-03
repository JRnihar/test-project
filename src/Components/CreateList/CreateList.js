import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const CreateList = () => {   
    const [products, setProduct] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email
    useEffect(() => {
        const run = async () => {
            await axios
                .get(`http://localhost:5000/api/v1/test/${email}`)
                .then(function (res) {
                    setProduct(res.data)
                })
        }
        run()
    }, [])
    
   
    return (
        <div>
            {
                products?.data?.map(t => <h1 style={{ fontSize: ` ${t.allValues?.sections[1].setting.customCSS.fontSize}`, textAlign: ` ${t.allValues?.sections[1].setting.customCSS.textAlign}`, fontFamily: `${t.allValues?.sections[1].setting.customCSS.fontFamily}`, color: `${t.allValues?.sections[1].setting.customCSS.color}` }}>{t?.allValues?.sections[1].setting?.customCSS?.text}</h1>)
            }
        </div>
    );
};

export default CreateList;