import ProductTile from "@/components/productTIle/productTIle";
import styles from "./collections.module.scss";
import { PRODUCTS } from "@/mock/products";

export default function Page () {
  return (
    <main className={styles.collectionsPage}>
      <div className={styles.collectionsPage__description}>
        <h1>Homem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium est minima repudiandae voluptatum, maxime saepe sint, id optio maiores iste deleniti odit incidunt debitis aliquam amet corrupti beatae exercitationem.</p>
      </div>
      <div className={styles.collectionsPage__displayContent}>
        <div className={styles.filters}>
          <div className={styles.filter}>
            <span>Generos</span>
            <ul>
              <li>Homem</li>
              <li>Unissex</li>
            </ul>
          </div>
          <div className={styles.filter}>
            <span>Tamanho</span>
            <ul>
              <li>P</li>
              <li>M</li>
              <li>G</li>
              <li>GG</li>
            </ul>
          </div>
          <div className={styles.filter}>
            <span>Cor</span>
            <ul>
              <li>Branco</li>
              <li>Preto</li>
              <li>Amarelo</li>
              <li>Laranja</li>
              <li>Vermelho</li>
            </ul>
          </div>
          <div className={styles.filter}>
            <span>Categoria</span>
            <ul>
              <li>Esportiva</li>
              <li>Casual</li>
              <li>Formal</li>
              <li>Mais vendidos</li>
            </ul>
          </div>
        </div>
        <div className={styles.productGrid}>
          {
            ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6].map((number, index) => (
              <ProductTile key={`${PRODUCTS[1].id}-${index}`} {...PRODUCTS[1]}/>
            )))
          }
        </div>
      </div>
    </main>
  );
}
