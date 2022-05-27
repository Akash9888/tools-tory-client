import React from "react";
import { useAlert } from "react-alert";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";
import useFetch from "../../CustomHooks/useFetch";
import auth from "../../firebaseConfig";
import ToolDetails from "./ToolDetails";

const Purchase = () => {
    let params = useParams();
    const [user] = useAuthState(auth);
    const alert = useAlert();
    const { isLoading, error, data, isFetching } = useFetch(
        `https://aqueous-anchorage-06068.herokuapp.com/api/tool/fetch-single-tool/${params._id}`
    );

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        alert.error(error.message);
    }

    return (
        <div>
            <ToolDetails data={data.data[0]} />
        </div>
    );
};

export default Purchase;
