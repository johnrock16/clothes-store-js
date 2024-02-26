'use client';

import Image from "next/image";
import styles from "./register.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import createFormValidator from '@/js/form/formValidator/createFormValidator';
import { customValidation } from '@/js/form/formRules/validation';
import { CUSTOM_RULE } from '@/js/form/formRules/rules';

export default function Login () {
  const [errors, setErrors] = useState({
    firstName: '',
    email: '',
    lastName: '',
    password: '',
    birthdate: '',
  });
  const { register, handleSubmit } = useForm();
  const { fieldFormAttributes } = createFormValidator({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

  const onSubmit = (data: any) => {
    console.log(data)
    alert("cadastrado com sucesso!");
  }

  return (
    <main className={styles.registerPage}>
      <div className="container">
        <div className={styles.registerPage__banner}>
          <Image className="img-fluid" src="/images/products/shirt_01.jpeg" alt="cloth" width={1260} height={750}/>
        </div>
        <div className={styles.registerPage__content}>
          <h1>Crie sua Conta</h1>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__field}>
              <label>
                Nome
                <input {...fieldFormAttributes({name: 'firstName', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.firstName) ? <span className='form__error'>{errors.firstName}</span> : null}
            </div>
            <div className={styles.form__field}>
              <label>
                Sobrenome
                <input {...fieldFormAttributes({name: 'lastName', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.lastName) ? <span className='form__error'>{errors.lastName}</span> : null}
            </div>
            <div className={styles.form__field}>
              <label>
                Email
                <input {...fieldFormAttributes({name: 'email', rule: 'email', register, setErrors})}/>
              </label>
              {(errors?.email) ? <span className='form__error'>{errors.email}</span> : null}
            </div>
            <div className={styles.form__field}>
              <label>
                Senha
                <input {...fieldFormAttributes({name: 'password', rule: 'password', register, setErrors})}/>
              </label>
              {(errors?.password) ? <span className='form__error'>{errors.password}</span> : null}
            </div>
            <div className={styles.form__field}>
              <label>
                Data de Nascimento
                <input type="date" {...fieldFormAttributes({name: 'birthdate', rule: 'date--age', register, setErrors})}/>
              </label>
              {(errors?.birthdate) ? <span className='form__error'>{errors.birthdate}</span> : null}
            </div>
            <div className={styles.form__buttons}>
              <button type="submit" className="button button--primary">Cadastre-se</button>
              <Link href="/account/login" className="button button--text">Já possuí uma conta?</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
