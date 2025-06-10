'use client'

import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import { createOrder } from "@/utils/orders.helper";
import { useState, useEffect } from "react"

const CartView = () => {
    const {userData} = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalCart, setTotalCart] = useState<number>(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if(storedCart) {
            let totalCart = 0;
            storedCart.map((product: IProduct) => {
                totalCart = totalCart + product.price
            })
            setTotalCart(totalCart)
            setCart(storedCart)
        }
    }, [])

    const handleCheckout = async () => {
        if(userData?.token) {
            const idProducts = cart?.map((product) => product.id);
            await createOrder(userData?.token, idProducts)
            localStorage.setItem("cart", "[]")
            setCart([])
            setTotalCart(0)
        }
    }


  return (
    <div className="flex flex-row items-center justify-around w-full">
        <div>
            {cart.length ? 
                cart.map((product) => {
                    return (
                        <div key={product.id}>
                            <p>{product.name}</p>
                            <p>Price ${product.price}</p>
                        </div>
                    )
                }) : (
                    <div>No tienes productos en tu carrito</div>
                )}
        </div>

        <div>
                <p>Total: ${totalCart}</p>
                <button onClick={handleCheckout}>Comprar</button>
        </div>

    </div>
  )
}

export default CartView