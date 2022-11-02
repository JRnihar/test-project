import React from 'react';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {

        signOut(auth);
        navigate('/')
    }
    if (loading) {
        return <Loader/>
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to='/' class="navbar-brand ms-5" href="#">Test Project</Link>
                    <ul class="navbar-nav m ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-5">
                            <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item me-5">
                            {
                                user
                                ?
                                    <button className='btn btn-outline-primary ' onClick={handleSignOut} > LogOut</button>
                                :
                                    <button className='btn btn-outline-primary' ><Link to='/login' class="nav-link t">Login</Link></button> 
                            }
                            
                        </li> 
                    </ul>  
                </div>
            </div>
        </nav>
    );
};

export default Header;