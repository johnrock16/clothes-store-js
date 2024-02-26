'use client';

import AccountSideMenu from "@/components/accountSideMenu/accountSideMenu";
import styles from "./paymentsRegister.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import createFormValidator from "@/js/form/formValidator/createFormValidator";
import { CUSTOM_RULE } from "@/js/form/formRules/rules";
import { customValidation } from "@/js/form/formRules/validation";

export default function PaymentRegister () {
  const [errors, setErrors] = useState({
    name: '',
    nameCard: '',
    number: '',
    expirateDate: '',
    cvv: '',
    observation: '',
  });
  const { register, handleSubmit } = useForm();
  const { fieldFormAttributes } = createFormValidator({language: 'en', rules: CUSTOM_RULE ,customValidation: customValidation})

  const onSubmit = (data: any) => {
    console.log(data)
    alert("cadastrado com sucesso!");
  }

  return (
    <main className={styles.paymentsRegisterPage}>
      <div className={styles.paymentsRegisterPage__wrapper}>
        <AccountSideMenu/>
        <div className={styles.paymentsRegisterPage__page}>
          <h1>Cadastre seu Pagamento</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nobis, asperiores id illo pariatur aliquam officia reiciendis. Quia, voluptas reprehenderit illum fugiat, culpa nemo omnis nihil, hic rerum praesentium asperiores?</p>
          <form className={styles.addressRegisterForm} onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
              <label>
                Nome do Cartão:
                <input {...fieldFormAttributes({name: 'nameCard', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.nameCard) ? <span className='form__error'>{errors.nameCard}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Nome:
                <input {...fieldFormAttributes({name: 'name', rule: 'name', register, setErrors})}/>
              </label>
              {(errors?.name) ? <span className='form__error'>{errors.name}</span> : null}
            </div>
            <div className="col-6">
              <label>
                Número do Cartão:
                <input {...fieldFormAttributes({name: 'number', rule: 'creditCardNumber', register, setErrors})}/>
              </label>
              {(errors?.number) ? <span className='form__error'>{errors.number}</span> : null}
            </div>
            <div className="col-3">
              <label>
                Validade:
                <input {...fieldFormAttributes({name: 'expirateDate', rule: 'creditCardExpiratedDate', register, setErrors})}/>
              </label>
              {(errors?.expirateDate) ? <span className='form__error'>{errors.expirateDate}</span> : null}
            </div>
            <div className="col-3">
              <label>
                CVV:
                <input {...fieldFormAttributes({name: 'cvv', rule: 'cvv', register, setErrors})}/>
              </label>
              {(errors?.cvv) ? <span className='form__error'>{errors.cvv}</span> : null}
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
