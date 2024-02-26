import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./addresses.module.scss";
import { BsPlus } from "react-icons/bs";
import Link from "next/link";

export default function AddressesPage() {
  return (
    <main className={styles.addressesPage}>
      <div className={styles.addressesPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.addressesPage__page}>
          <h1>Meus Endereços</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <div className={styles.addressesPage__addresses}>
            <Link href="/account/addresses/register" className={styles.addressesPage__address_add}>
              <BsPlus className="icon"/>
              <span className={styles.addressesPage__addressTitle}>Adicionar Endereço</span>
            </Link>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>
          </div>
        </div>
      </div>
    </main>
  );
}

function AddressCard () {
  return (
    <div className={styles.addressesPage__address}>
      <span className={styles.addressesPage__addressTitle}>Minha Casa</span>
      <span><strong>Endereço: </strong>Rua dos Desinformados, 321 - Vila Velha</span>
      <span><strong>Cidade: </strong>Parueri</span>
      <span><strong>Estado: </strong>São Paulo</span>
      <span><strong>País: </strong>Brazil</span>
      <span><strong>CEP: </strong>01000-000</span>
      <span><strong>Observação: </strong>Bata na porta, por favor.</span>
      <button className="button button--text ml-auto">Editar</button>
    </div>
  );
}
