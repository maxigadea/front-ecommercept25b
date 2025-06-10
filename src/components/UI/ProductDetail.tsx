"use client";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

const ProductDetail: React.FC<IProduct> = ({
  id,
  name,
  image,
  description,
  stock,
  price,
  categoryId,
}) => {
  const router = useRouter();
  const { userData } = useAuth();
  const handleAddToCart = () => {
    if (!userData?.token) {
      alert("Inicia sesión para comprar");
      router.push("/login");
    } else {
      const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((item: IProduct) => {
        if (item.id === id) return true;
        return false;
      });
      if (productExist) {
        alert("Este producto ya existe en tu carrito");
        router.push("/cart");
      } else {
        cart.push({
          name,
          id,
          description,
          stock,
          price,
          categoryId,
          image,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("El producto fue agregado al carrito");
      }
    }
  };

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="imagen del product" />
      <p>{description}</p>
      <p>Stock {stock}</p>
      <p>Price ${price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
