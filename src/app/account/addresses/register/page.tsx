'use client';

import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./addressRegister.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import createFormValidator from "@/js/form/formValidator/createFormValidator";
import { CUSTOM_RULE } from "@/js/form/formRules/rules";
import { customValidation } from "@/js/form/formRules/validation";

export default function AddressRegister () {
  const [errors, setErrors] = useState({
    addressName: '',
    zipcode: '',
    street: '',
    number: '',
    district: '',
    city: '',
    country: '',
    observation: '',
  });
  const { register, handleSubmit } = useForm();
  const { fieldFormAttributes } = createFormValidator({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

  const onSubmit = (data: any) => {
    console.log(data)
    alert("cadastrado com sucesso!");
  }

  return (
    <main className={styles.addressesRegisterPage}>
      <div className={styles.addressesRegisterPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.addressesRegisterPage__page}>
          <h1>Cadastre seu Endereço</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <form className={styles.addressRegisterForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="col-8">
              <label>
                Nome do Endereço:
                <input {...fieldFormAttributes({name: 'addressName', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.addressName) ? <span className='form__error'>{errors.addressName}</span> : null}
            </div>
            <div className="col-4">
              <label>
                CEP:
                <input {...fieldFormAttributes({name: 'zipcode', rule: 'zipcode', register, setErrors})}/>
              </label>
              {(errors?.zipcode) ? <span className='form__error'>{errors.zipcode}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Rua:
                <input {...fieldFormAttributes({name: 'street', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.street) ? <span className='form__error'>{errors.street}</span> : null}
            </div>
            <div className="col-2">
              <label>
                Número:
                <input {...fieldFormAttributes({name: 'number', rule: 'addressNumber', register, setErrors})}/>
              </label>
              {(errors?.number) ? <span className='form__error'>{errors.number}</span> : null}
            </div>
            <div className="col-4">
              <label>
                Bairro:
                <input {...fieldFormAttributes({name: 'district', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.district) ? <span className='form__error'>{errors.district}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Cidade:
                <input {...fieldFormAttributes({name: 'city', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.city) ? <span className='form__error'>{errors.city}</span> : null}
            </div>
            <div className="col-6">
              <label>
                País:
                <input {...fieldFormAttributes({name: 'country', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.country) ? <span className='form__error'>{errors.country}</span> : null}
            </div>
            <div className="col-12">
              <label>
                Observação:
                <textarea {...fieldFormAttributes({name: 'observation', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.observation) ? <span className='form__error'>{errors.observation}</span> : null}
            </div>
            <button className="button button--primary">Cadastrar</button>
          </form>
        </div>
      </div>
    </main>
  );
}
