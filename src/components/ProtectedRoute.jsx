import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const userToken = localStorage.getItem("userToken");

    return userToken ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
