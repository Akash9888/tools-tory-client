import axios from "axios";
import { useState } from "react";
// st useUpdate = () => {
//     const [upStatus, setUpStatus] = useState("");
//     const [upError, setUpError] = useState(null);
//     const [upLoading, setUpLoading] = useState(false);

//     const update = (url, modifiData) => {
//         setUpLoading(true);
//         console.log("2", upLoading);
//         axios
//             .put(url, modifiData)
//             .then((response) => {
//                 setUpStatus(response.data);
//                 console.log(upStatus);
//             })
//             .catch((error) => setUpError(error))
//             .finally(() => {
//                 setUpLoading(false);
//                 console.log("3", upLoading);
//             });
//     };

const useUpdate = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const saveupdatedData = (url, updatedData) => {
        console.log(updatedData);
        setLoading(true);
        axios
            .put(url, updatedData)

            .then((response) => {
                setData(response.data);

                console.log(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { saveupdatedData, loading, error, data };
};

export default useUpdate;
