'use client';

import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./myData.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import createFormValidator from "@/js/form/formValidator/createFormValidator";
import { CUSTOM_RULE } from "@/js/form/formRules/rules";
import { customValidation } from "@/js/form/formRules/validation";

export default function MyData () {
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    email: '',
    birthdate: '',
    country: '',
  });
  const { register, handleSubmit } = useForm();
  const { fieldFormAttributes } = createFormValidator({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

  const onSubmit = (data: any) => {
    console.log(data)
    alert("cadastrado com sucesso!");
  }
  return (
    <main className={styles.myDataPage}>
      <div className={styles.myDataPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.myDataPage__page}>
          <h1>Meus Dados</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <form className={styles.myDataRegisterForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <label>
                Nome:
                <input {...fieldFormAttributes({name: 'name', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.name) ? <span className='form__error'>{errors.name}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Sobrenome:
                <input {...fieldFormAttributes({name: 'lastName', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.lastName) ? <span className='form__error'>{errors.lastName}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Email:
                <input {...fieldFormAttributes({name: 'email', rule: 'email', register, setErrors})}/>
              </label>
              {(errors?.email) ? <span className='form__error'>{errors.email}</span> : null}
            </div>
            <div className="col-3">
              <label>
                Data de Nascimento:
                <input {...fieldFormAttributes({name: 'birthdate', rule: 'date--age', register, setErrors})} type="date"/>
              </label>
              {(errors?.birthdate) ? <span className='form__error'>{errors.birthdate}</span> : null}
            </div>
            <div className="col-3">
              <label>
                País:
                <input {...fieldFormAttributes({name: 'country', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.country) ? <span className='form__error'>{errors.country}</span> : null}
            </div>
            <button className="button button--primary">Alterar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
