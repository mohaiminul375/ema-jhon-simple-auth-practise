import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext);
    const location = useLocation();
  
    if(user && user.uid){
    return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;