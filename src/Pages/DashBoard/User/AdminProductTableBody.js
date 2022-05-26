import React from "react";

const AdminProductTableBody = ({ data, index, deleteProduct }) => {
    const fieldValues = Object.values(data);
    // fieldValues.pop();
    return (
        <tr>
            <th>{index + 1}</th>

            {fieldValues.map((value) => {
                return <td>{value}</td>;
            })}

            <td>
                <button
                    class="btn btn-outline btn-error"
                    onClick={() => {
                        deleteProduct(data._id);
                    }}>
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default AdminProductTableBody;
