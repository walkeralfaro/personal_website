import styles from './Contact.module.scss';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import gitHub_logo from '/images/social/github.svg';
import linkedIn_logo from '/images/social/linkedin.svg';
import dribbble_logo from '/images/social/dribbble.svg';

import { createPost } from '../../services/api';
import { toastifyError, toastifySuccess } from '../../services/toastify';
import { getRandomNumber } from '../../services/humanTest';
import { AddTest } from './AddTest';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  testResponse: number;
  test: boolean;
}

interface Props {
  contact_api: string;
}
// ------------------------------------------------------------------------------------------------------------------------
export default function Contact({contact_api}: Props) {

  const{ register, watch, reset, formState, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm<FormData>();
  const [resultTest, setResultTest] = useState(false);
  const watchTest = watch('testResponse');

  const handleResult = (value: boolean) => {
    setResultTest(value);
  }

  const onSubmit = async ( data: FormData ) => {
    const dataToSend = {...data, test: resultTest};
    const id = toast.loading('Enviando Mensaje 📨');
    try {

      if(resultTest) {

        const response = await createPost(dataToSend, contact_api);
        if(response.state === 'OK') {
          toastifySuccess(id);
        }
        
      } else {
        throw new Error("error");
      }

    } catch (error) {
      toastifyError(id);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: '',
        email: '',
        subject: '',
        message: '',
        testResponse: null,
      });
    }
  }, [formState]);
  
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_inputs}>
          <div className={styles.form_input}>
            <label htmlFor="name">nombre</label>
            <input type="text" id="name" className={errors.name && styles.inputError}
            {...register('name', {
              required: true,
              pattern: /^[\p{L}\s]+$/u,
              minLength: 2,
              maxLength: 30,
            })} />
            {errors.name?.type === 'required' && <p>El campo es requerido</p>}
            {errors.name?.type === 'maxLength' && <p>Máximo 30 letras</p>}
            {errors.name?.type === 'minLength' && <p>Mínimo 2 letras</p>}
            {errors.name?.type === 'pattern' && <p>Sólo debe contener letras</p>}
          </div>
          <div className={styles.form_email_subject}>
            <div className={styles.form_input}>
              <label htmlFor="email">correo</label>
              <input type="email" id="email" className={errors.email && styles.inputError}
              {...register('email', {
                required: true, 
                pattern:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                maxLength: 40,
              })} />
              {errors.email?.type === 'required' && <p>El campo es requerido</p>}
              {errors.email?.type === 'pattern' && <p>Ingrese un correo válido</p>}
              {errors.email?.type === 'maxLength' && <p>Máximo 40 caracteres</p>}
            </div>
            <div className={styles.form_input}>
              <label htmlFor="subject">asunto</label>
              <input type="text" id="subject" className={errors.subject && styles.inputError}
              {...register('subject', {
                required: true,
                pattern: /^[\p{L}\s]+$/u,
                maxLength: 40,
              })} />
              {errors.subject?.type === 'required' && <p>El campo es requerido</p>}
              {errors.subject?.type === 'maxLength' && <p>Máximo 40 letras</p>}
              {errors.subject?.type === 'pattern' && <p>Sólo debe contener letras</p>}
            </div>
          </div>
          <div className={styles.form_input}>
            <label htmlFor="message">mensaje</label>
            <textarea id="message" className={errors.message && styles.inputError}
            {...register('message', {
              required: true,
              pattern: /^[^<>{}[\]\\\/]*$/i,
              maxLength: 300,
            })} />
            {errors.message?.type === 'required' && <p>El campo es requerido</p>}
            {errors.message?.type === 'pattern' && <p>No caracteres especiales</p>}
            {errors.message?.type === 'maxLength' && <p>Máxima 50 palabras</p>}
          </div>

          <div className={styles.form_input}>
            <label htmlFor="testResponse" >test 
              <div className={styles.info} title='ingrese la suma'>
                <sup>&#8505;</sup>
              </div>
            </label>
            <AddTest testResponse = {watchTest} onResult={handleResult}/>
            <input type="number" id="testResponse" className={errors.testResponse && styles.inputError}
            {...register('testResponse', {
              required: true,
            })} />
            {errors.subject?.type === 'required' && <p>El campo es requerido</p>}

          </div>

        </div>

        <div className={styles.form_actions}>
          <div className={styles.form_button}>
            <button type="submit" aria-label="submit">Enviar</button>
          </div>

          <div className={styles.social_links}>
            <a href="https://github.com/walkeralfaro" target="_blank">
              <img src={gitHub_logo} alt="github_link" />
            </a>
            <a href="https://linkedin.com/in/walkeralfaro/" target="_blank">
              <img src={linkedIn_logo} alt="linkedin_link" />
            </a>
            <a href="https://dribbble.com/walkeralfaro" target="_blank">
              <img src={dribbble_logo} alt="dribbble_link" />
            </a>
          </div>
        </div>

      </form>
      <ToastContainer />
    </div>
  )
}