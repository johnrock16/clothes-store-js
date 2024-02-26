import Image from "next/image";
import styles from "./checkoutConfirm.module.scss";

export default function CheckoutConfirm () {
  return (
    <main className={styles.checkoutConfirm}>
      <div className="cr-banner">
        <Image src="/images/banners/cloth.jpeg" alt="cloth" width={1260} height={750}/>
      </div>
      <div className="container">
        <h1 className="mt-5">Pedido realizado com sucesso!</h1>
        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam libero deleniti delectus dolor incidunt! Vel, iste? Voluptatem deleniti dignissimos itaque ut corporis beatae. Odio dolorum eveniet, repudiandae velit repellat quam.</p>
        <button className="button button--text mt-2">Voltar para a página inicial</button>
      </div>
    </main>
  );
}
