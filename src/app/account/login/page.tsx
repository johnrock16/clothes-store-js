import Image from "next/image";
import styles from "./login.module.scss";
import Link from "next/link";

export default function Login () {
  return (
    <main className={styles.loginPage}>
      <div className="container">
        <div className={styles.loginPage__banner}>
          <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
        </div>
        <div className={styles.loginPage__content}>
          <h1>Login</h1>
          <form className={styles.form}>
            <div className={styles.form__field}>
              <label>
                Email
                <input type="text"/>
              </label>
            </div>
            <div className={styles.form__field}>
              <label>
                Password
                <input type="text"/>
              </label>
              <span className={styles.form__passwordForgot}>Esqueceu a Senha?</span>
            </div>
            <div className={styles.form__buttons}>
              <Link href="/account" className="w-100"><button className="button button--primary">Login</button></Link>
              <Link href="/account/register" className="button button--text">Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
