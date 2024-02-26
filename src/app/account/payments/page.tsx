import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./payments.module.scss";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className={styles.paymentsPage}>
      <div className={styles.paymentsPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.paymentsPage__page}>
          <h1>Meus Pagamentos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <div className={styles.paymentsPage__addresses}>
            <Link href="/account/payments/register" className={styles.paymentsPage__address_add}>
              <BsPlus className="icon"/>
              <span className={styles.paymentsPage__addressTitle}>Adicionar Pagamento</span>
            </Link>
            <PaymentCard/>
            <PaymentCard/>
            <PaymentCard/>
            <PaymentCard/>
            <PaymentCard/>
          </div>
        </div>
      </div>
    </main>
  );
}

function PaymentCard () {
  return (
    <div className={styles.paymentsPage__address}>
      <span className={styles.paymentsPage__addressTitle}>Cartão Black</span>
      <span><strong>Nome: </strong>Joao da Silva</span>
      <span><strong>Número: </strong>**** **** **** 0810</span>
      <span><strong>Bandeira: </strong>Master Viza CardElo</span>
      <span><strong>Validade: </strong>10/25</span>
      <span><strong>Observação: </strong>Tem limite</span>
      <button className="button button--text ml-auto">Editar</button>
    </div>
  );
}
