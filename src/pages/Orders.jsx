import React from "react";
import Card from "../components/Card";
import axios from "axios";



function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoadiing] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://638b5e117220b45d228e40c9.mockapi.io/order"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoadiing(false);
      } catch (error) {
        alert("error with orders,but don't worry");
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>

      <div className="d-flex justify-center flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
