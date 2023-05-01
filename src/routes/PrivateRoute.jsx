import React, { useContext } from 'react';
import { AuthContext } from '../components/providers/AuthProviders';
import {
      Navigate, useNavigate,
      useLocation,
} from "react-router-dom";
const PrivateRoute = ({ children }) => {
      const { user, loading } = useContext(AuthContext);
      let navigate = useNavigate();
      let location = useLocation();
      if (loading) return <div>Loaidng .....</div>
      if (user) {
            return children;
      }
      return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;