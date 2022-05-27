import React from "react";

const UserTableBody = ({ data, index, deleteOrder, makePayment }) => {
    const fieldValues = Object.values(data);
    fieldValues.pop();

    return (
        <tr>
            <th>{index + 1}</th>

            {fieldValues.map((value) => {
                return <td>{value}</td>;
            })}

            <td>
                {data?.status == "unpaid" ? (
                    <button
                        class="btn btn-outline btn-success "
                        onClick={() => {
                            makePayment(data._id);
                        }}>
                        Pay Now
                    </button>
                ) : (
                    `${data?.transaction}`
                )}
            </td>
            <td>
                {data?.status == "unpaid" ? (
                    <button
                        class="btn btn-outline btn-error"
                        onClick={() => {
                            deleteOrder(data._id);
                        }}>
                        Remove
                    </button>
                ) : (
                    <button disabled class="btn btn-outline btn-error">
                        Remove
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UserTableBody;
