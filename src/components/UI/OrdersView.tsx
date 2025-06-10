'use client'
import { useAuth } from "@/context/AuthContext";
import { IOrder, IProduct } from "@/types";
import { getOrders } from "@/utils/orders.helper";
import { useState, useEffect } from "react"

const OrdersView = () => {
    const {userData} = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);

    const handleGetOrders = async () => {
        if(userData?.token) {
        const response = await getOrders(userData?.token);
        setOrders(response)
        }
    }

    useEffect(() => {
        handleGetOrders();
    }, [userData])

  return (
    <div className="flex flex-row items-center justify-center w-full">
        <div>
            {orders.length ? 
                orders.map((order) => {
                    return (
                        <div key={order.id}>
                            <p>ORDEN N° {order.id}</p>
                            <p>DATE: {new Date(order.date).toLocaleDateString()}</p>
                            <p>STATUS: {order.status}</p>
                            {
                                order.products.map((product: IProduct) => {
                                    return (
                                        <div key={product.id}>
                                            <p>{product.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                }) : (
                    <div>No tienes ordenes realizadas</div>
                )}
        </div>
    </div>
  )
}

export default OrdersView