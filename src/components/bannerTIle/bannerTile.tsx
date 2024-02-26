import Image from "next/image";
import styles from "./bannerTile.module.scss";

export default function BannerTile () {
  return (
    <div className={styles.bannerTile}>
      <Image className="img-fluid" src="/images/tiles/clothes.webp" alt="clothes" width={1260} height={750}/>
      <div className={styles.bannerTIle__content}>
        <span className={styles.bannerTile__title}>Esporte</span>
      </div>
    </div>
  );
}
