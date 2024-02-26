'use client';

import { BsDash, BsPlus } from "react-icons/bs";
import styles from "./inputCounter.module.scss";
import { useCartStore } from "@/stores/cart";

type InputCounter = {
  id: string,
  quantity: number,
}

export default function InputCounter ({id}: InputCounter) {
  const incrementCartItem = useCartStore((state: any) => state.incrementCartItem);
  const decrementCartItem = useCartStore((state: any) => state.decrementCartItem);
  const cartItems = useCartStore((state: any) => state.items);

  const handleIncrement = () => {
    incrementCartItem(id);
  }

  const handleDecrement = () => {
    decrementCartItem(id);
  }

  return (
    <div className={styles.inputCounter}>
      <button onClick={handleDecrement}><BsDash/></button>
      <input type="text" value={cartItems[id]?.quantity ? cartItems[id].quantity : 0} readOnly/>
      <button onClick={handleIncrement}><BsPlus/></button>
    </div>
  )
}