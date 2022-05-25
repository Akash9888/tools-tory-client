import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import useFetch from "../../CustomHooks/useFetch";
import auth from "../../firebaseConfig";
import ToolDetails from "./ToolDetails";

const Purchase = () => {
    let params = useParams();
    const [user] = useAuthState(auth);

    const { isLoading, error, data, isFetching } = useFetch(
        `http://localhost:5000/api/fetch-single-tool/${params._id}`
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <ToolDetails data={data.data[0]} />
        </div>
    );
};

export default Purchase;
