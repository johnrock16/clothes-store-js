'use client';

import ProductTileMinicart from "@/components/productTIleMinicart/productTIleMinicart";
import { useCartStore } from "@/stores/cart";
import styles from "./cart.module.scss";

export default function Cart () {
  const cartItems = useCartStore((state: any) => state.items);
  return (
    <main>
      <div className="container">
        <h1>Cart</h1>
        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur cum amet explicabo facere delectus fugit, nam voluptas? At sed labore itaque ipsam iure dignissimos eligendi enim commodi inventore saepe?</p>
        <div className={styles.cart__wrapper}>
          <div className={styles.cart__products}>
            {
              (cartItems && Object.keys(cartItems).length > 0)
              ?
                (Object.keys(cartItems).map((key: string) => cartItems[key]?.quantity > 0 ? <ProductTileMinicart key={cartItems[key].id} {...cartItems[key]}/> : null))
              :
                null
            }
          </div>
          <div className={styles.cart__box}>
            <h2>Seu pedido</h2>
            <span className={styles.cart__priceTotal}><strong>Valor Total:</strong> R$ 1000,00</span>
            <span>Parcelas em até x3 de R$ 333,34</span>
            <p className="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe labore inventore corrupti illo dolorem</p>
            <button className="button button--primary mt-4">Ir para Checkout</button>
          </div>
        </div>
      </div>
    </main>
  );
}