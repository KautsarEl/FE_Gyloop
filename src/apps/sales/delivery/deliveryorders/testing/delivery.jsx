import React from 'react';
import deliveryData from '../data/delivery';

const DeliveryTable = () => {
    return (
        <div>
            <h1>Delivery Orders</h1>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Order Number</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Delivery Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryData.map((delivery) => (
                        <tr key={delivery.id}>
                            <td>{delivery.id}</td>
                            <td>{delivery.orderNumber}</td>
                            <td>{delivery.customerName}</td>
                            <td>{delivery.address}</td>
                            <td>{delivery.deliveryDate}</td>
                            <td>{delivery.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveryTable;