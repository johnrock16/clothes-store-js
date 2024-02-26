'use client';

import ProductTileMinicart from "@/components/productTIleMinicart/productTIleMinicart";
import styles from "./checkout.module.scss";
import { useCartStore } from "@/stores/cart";

export default function Checkout () {
  const cartItems = useCartStore((state: any) => state.items);
  return (
    <main className={styles.checkout}>
      <div className="container">
        <h1>Checkout</h1>
        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas consectetur cum amet explicabo facere delectus fugit, nam voluptas? At sed labore itaque ipsam iure dignissimos eligendi enim commodi inventore saepe?</p>
        <div className={styles.checkout__wrapper}>
          <div className={styles.checkout__forms}>
            <section>
              <h2>Seus dados</h2>
              <form className={styles.form}>
                <div className="col-6">
                  <label>
                    Nome
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Sobrenome
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Email
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Telefone
                    <input type="text"/>
                  </label>
                </div>
              </form>
            </section>
            <section className="mt-4">
              <h2>Entrega</h2>
              <form className={styles.form}>
              <div className="col-4">
                  <label>
                    CEP:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-5">
                  <label>
                    Rua:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    Número:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    Bairro:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-5">
                  <label>
                    Cidade:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    País:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-12">
                  <label>
                    Observação:
                    <textarea/>
                  </label>
                </div>
              </form>
            </section>
            <section className="mt-4">
              <h2>Pagamento</h2>
              <form className={styles.form}>
                <div className="col-12">
                  <label>
                    Metodo de Pagamento:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-12">
                  <label>
                    Número do Cartão:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-6">
                  <label>
                    Nome do cartão:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    Validade:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    CVV:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-12">
                  <label>
                    Parcelas:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    CEP:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-5">
                  <label>
                    Rua:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    Número:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-4">
                  <label>
                    Bairro:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-5">
                  <label>
                    Cidade:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    País:
                    <input type="text"/>
                  </label>
                </div>
                <div className="col-12">
                  <label>
                    Observação:
                    <textarea/>
                  </label>
                </div>
              </form>
            </section>
            <section className="mt-4">
              <h2>Confirme seu pedido</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium minima voluptatibus, quasi eaque exercitationem magni neque libero laudantium obcaecati ipsum impedit fugit inventore a reprehenderit itaque nisi. Hic, quaerat nam?</p>
              <button className="button button--primary mt-4">Confirmar</button>
            </section>
          </div>
          <div className={styles.checkout__order}>
            <h2>Seu pedido</h2>
            <span className={styles.checkout__priceTotal}><strong>Valor total: </strong>R$ 1 000,00</span>
            <div className={styles.checkout__products}>
              {
                (cartItems && Object.keys(cartItems).length > 0)
                ?
                  (Object.keys(cartItems).map((key: string) => cartItems[key]?.quantity > 0 ? <ProductTileMinicart key={cartItems[key].id} {...cartItems[key]}/> : null))
                :
                  null
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
