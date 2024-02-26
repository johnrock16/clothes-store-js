import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footer__top}>
          <div className={styles.footer__company}>
            <span className={styles.footer__companyTitle}>Crowthes</span>
            <p>Paper View transforms renewable resources into products people depend on every day, from planet-friendly Our company will save dreams and money with paper</p>
            <div className={styles.footer__socialMedia}>
              <Link href="https://www.facebook.com">Facebook</Link>
              <Link href="https://www.instagram.com">Instagram</Link>
              <Link href="https://www.linkedin.com">Linkedin</Link>
              <Link href="https://www.twitter.com">Twitter</Link>
            </div>
          </div>
          <div className={styles.footer__redirects}>
            <ul className={styles.footer__links}>
              <li className={styles.footer__link}><span>Pages new</span></li>
              <li className={styles.footer__link}>
                <Link href="https://www.linkedin.com">Page content</Link>
              </li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">New page content</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page incredible</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page craziest page</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page of us</Link></li>
            </ul>
            <ul className={styles.footer__links}>
              <li className={styles.footer__link}><span>Brand new</span></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page content</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">New page content</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page incredible</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page craziest page</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page of us</Link></li>
            </ul>
            <ul className={styles.footer__links}>
              <li className={styles.footer__link}><span>Company</span></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page content</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">New page content</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page incredible</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page craziest page</Link></li>
              <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page of us</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <ul className={styles.footer__links_row}>
            <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page 1</Link></li>
            <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page 1</Link></li>
            <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page 1</Link></li>
            <li className={styles.footer__link}><Link href="https://www.linkedin.com">Page 1</Link></li>
          </ul>
          <span className={styles.footer__rightsText}>Paper View. None of rights are reserved.</span>
        </div>
      </div>
    </footer>
  );
}
