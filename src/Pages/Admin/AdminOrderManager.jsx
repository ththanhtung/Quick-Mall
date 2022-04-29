import React, { useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { OrderRequest } from "../../Request/OrderRequest";
import AdminButton from "./AdminButton";

function AdminOrderManager() {
  const [orders, setOrders] = useState([
    // {
    //   id: 6018239,
    //   user: {
    //     name: "John Doe",
    //     email: "johndoe@gmail.com",
    //   },
    //   products: [
    //     {
    //       id: 1,
    //       title: "Stick #51",
    //       price: 102.25,
    //       quantity: 2,
    //     },
    //     {
    //       id: 1,
    //       title: "Stick #51",
    //       price: 102.25,
    //       quantity: 2,
    //     },
    //   ],
    //   total: 102.25 * 2,
    //   status: "pending",
    //   address: "123 Main St, New York, NY 10001",
    // },
  ]);

  useEffect(() => {
    OrderRequest.getOrders().then((response) => {
      // console.log(response.data);
      setOrders(response.data);
    });
  }, []);

  const handleConfirm = (id) => {
    // If is pending,
    // then confirm
    // else
    // then delivered

    const order = orders.find((order) => order._id === id);
    setOrderStatus(id, order.status === "pending" ? "confirmed" : "delivered");
  };

  const setOrderStatus = (id, status) => {
    OrderRequest.updateOrder(id, status).then((_response) => {
      toast.success("Order status updated");
      setOrders(
        orders.map((order) => {
          if (order._id === id) {
            order.status = status;
          }
          return order;
        })
      );
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="ml-3 mt-1">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div>Search here</div>
      </div>

      {/* Body */}
      <div className="mx-3 my-8">
        {orders.length > 0 &&
          orders.map((order, index) => {
            return (
              // Wrapper
              <div key={index} className="flex flex-col mb-6">
                {/* Information */}
                <div className="flex flex-col lg:flex-row w-full border p-4 rounded bg-gray-100 content-start justify-start ">
                  {/* General Information */}
                  <div className="w-full lg:w-4/5">
                    <div className="text-zinc-400 font-semibold text-lg mb-3">
                      # {order._id}
                    </div>
                    <div className="text-zinc-900 font-bold text-xl">
                      {order.userId.username}
                    </div>
                    <div>{order.userId.email}</div>
                    <div>{order.address}</div>
                    <div>{order.phone}</div>
                  </div>
                  {/* Status */}
                  <div className="mt-3 lg:flex lg:flex-col w-full lg:w-2/5 text-left">
                    <div className="text-gray-700 content-start">status</div>
                    <div className="text-zinc-700 font-bold text-xl">
                      {order.status}
                    </div>
                  </div>
                  {/* Amount */}
                  <div className="mt-3 lg:flex lg:flex-col justify-start align-middle text-left w-full lg:w-2/5">
                    <div className="text-gray-700">amount</div>
                    <div className="text-zinc-700 font-bold text-xl">
                      $ {order.amount}
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex flex-row gap-2">
                    <AdminButton
                      text={<FaTrash />}
                      level={"rounded-outline-danger"}
                      alt={`Delete order #${order._id}`}
                    />
                    <AdminButton
                      text={<FaCheck />}
                      level={"rounded-outline-success"}
                      alt={"Confirm order"}
                      onClick={() => handleConfirm(order._id)}
                    />
                  </div>
                </div>

                {/* Products */}
                <div className="flex flex-col w-full border-t-0 border p-4 rounded hover:bg-gray-100 px-12 lg:px-40 justify-start align-middle">
                  {order.products &&
                    order.products.length > 0 &&
                    order.products.map((product, _index) => {
                      return (
                        <div key={_index} className="mb-2 w-full">
                          <div className="flex flex-row">
                            <span className="text-gray-500">
                              {product.productId.title}
                            </span>
                            <span className="font-bold text-zinc-900">
                              x {product.quantity}
                            </span>
                          </div>

                          <div></div>
                          <div>
                            ${" "}
                            {(
                              product.productId.price * product.quantity
                            ).toFixed(2)}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AdminOrderManager;
