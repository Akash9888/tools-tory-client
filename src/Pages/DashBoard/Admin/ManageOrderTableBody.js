import React from "react";

const ManageOrderTableBody = ({ data, index, manageOrders }) => {
    const fieldValues = Object.values(data);
    return (
        <tr>
            <th>{index + 1}</th>

            {fieldValues.map((value) => {
                return <td>{value}</td>;
            })}

            <td>
                {data?.status == "unpaid" || data?.status == "shipped" ? (
                    <button disabled class="btn btn-outline btn-error">
                        Shipped
                    </button>
                ) : (
                    <button
                        class="btn btn-outline btn-success"
                        onClick={() => {
                            manageOrders(data._id);
                        }}>
                        Shipped
                    </button>
                )}
            </td>
        </tr>
    );
};

export default ManageOrderTableBody;
