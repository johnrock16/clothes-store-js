import Image from "next/image";
import styles from "./productTile.module.scss";
import Link from "next/link";

type productTIle = {
  id: string,
  name: string,
  description: string,
  price: number,
  image: any,
}

export default function ProductTile ({id, name, image, description, price} : productTIle) {
  return (
    <div className={styles.productTile}>
      <div className={styles.productTIle__wrapper}>
        <Link href={`/products/${id}`}>
          <Image className="img-fluid" {...image} alt="shirt"/>
        </Link>
        <div className={styles.productTile__content}>
          <Link href={`/products/${id}`}>
            <h3>{name}</h3>
          </Link>
          <p>{description}</p>
          <span className={styles.productTile__price}>R$ {price},00</span>
        </div>
      </div>
    </div>
  );
}