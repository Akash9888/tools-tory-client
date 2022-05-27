import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../Components/Loader";
import useAdmin from "../../CustomHooks/useAdmin";
import auth from "../../firebaseConfig";
import { signOut } from "firebase/auth";
const RequiredAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const {
        isLoading,
        error: fetchError,
        data,
    } = useAdmin(
        `https://aqueous-anchorage-06068.herokuapp.com/api/user/fetch-admin/${user?.email}`
    );

    const location = useLocation();
    if (loading || isLoading) {
        return <Loader />;
    }
    if (!user || data?.data[0]?.role != "admin") {
        signOut(auth);
        return <Navigate to="/sign-in" state={{ from: location }} replace />;
    }
    return children;
};

export default RequiredAdmin;
