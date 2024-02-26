'use client';

import { useEffect, useState } from "react";
import ProductTileMinicart from "../productTIleMinicart/productTIleMinicart";
import styles from "./minicart.module.scss";
import { BsX } from "react-icons/bs";
import { useCartStore } from "@/stores/cart";

export default function Minicart () {
  const [state, setState] = useState({
    active: false
  });
  const cartItems = useCartStore((state: any) => state.items);

  const handleClickCloseButton = () => {
    const event = new CustomEvent("minicart:close");
    document.dispatchEvent(event);
  }

  useEffect(() => {
    const handleMinicartOpen = () => { setState((pv) => ({...pv, active: true}))}
    const handleMinicartClose = () => { setState((pv) => ({...pv, active: false}))}

    document.addEventListener("minicart:open", handleMinicartOpen);
    document.addEventListener("minicart:close", handleMinicartClose);
    return (() => {
      document.removeEventListener("minicart:open", handleMinicartOpen);
      document.removeEventListener("minicart:close", handleMinicartClose);
    });
  }, []);

  return (
    <div className={styles.minicart} data-active={!!state.active}>
      <div className={styles.minicart__wrapper}>
        <div className={styles.minicart__header}>
          <span className={styles.minicart__title}>Seu Carrinho</span>
          <button className="button button--icon" onClick={handleClickCloseButton}>
            <BsX className={styles.minicart__iconClose}/>
          </button>
        </div>
        <div className={styles.minicart__body}>
          <div className={styles.products}>
            {
              (cartItems && Object.keys(cartItems).length > 0)
              ?
                (Object.keys(cartItems).map((key: string) => cartItems[key]?.quantity > 0 ? <ProductTileMinicart key={cartItems[key].id} {...cartItems[key]}/> : null))
              :
                null
            }
          </div>
        </div>
        <div className={styles.minicart__footer}>
          <button className="button button--primary">Finalizar Compra - R$ 100,00</button>
          <button className="button button--text">Continuar Comprando</button>
        </div>
      </div>
    </div>
  );
}
