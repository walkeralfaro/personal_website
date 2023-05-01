import styles from './Contact.module.scss';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createPost } from '../../services/api';
import { toastifyError, toastifySuccess } from '../../services/toastify';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Props {
  contact_api: string;
}

export default function Contact({contact_api}: Props) {

  const{ register, reset, formState, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm<FormData>();
  
  const onSubmit = async ( data: FormData ) => {

    const id = toast.loading('Enviando Mensaje 📨');

    try {
      const response = await createPost(data, contact_api);
      if(response.state === 'OK') {
        toastifySuccess(id);
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
      });
    }
  }, [formState]);
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className={errors.name && styles.inputError}>name</label>
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
        <div>
          <label htmlFor="email">correo</label>
          <input type="email" id="email" {...register('email', {
            required: true, 
            pattern:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            maxLength: 40,
          })} />
          {errors.email?.type === 'required' && <p>El campo es requerido</p>}
          {errors.email?.type === 'pattern' && <p>Ingrese un correo válido</p>}
          {errors.email?.type === 'maxLength' && <p>Máximo 40 caracteres</p>}
        </div>
        <div>
          <label htmlFor="subject">asunto</label>
          <input type="text" id="subject" {...register('subject', {
            required: true,
            pattern: /^[\p{L}\s]+$/u,
            maxLength: 40,
          })} />
          {errors.subject?.type === 'required' && <p>El campo es requerido</p>}
          {errors.subject?.type === 'maxLength' && <p>Máximo 40 letras</p>}
          {errors.subject?.type === 'pattern' && <p>Sólo debe contener letras</p>}
        </div>
        <div>
          <label htmlFor="message">mensaje</label>
          <input type="text" id="message" {...register('message', {
            required: true,
            pattern: /^[^<>{}[\]\\\/]*$/i,
            maxLength: 300,
          })} />
          {errors.message?.type === 'required' && <p>El campo es requerido</p>}
          {errors.message?.type === 'pattern' && <p>No caracteres especiales</p>}
          {errors.message?.type === 'maxLength' && <p>Máxima 50 palabras</p>}
        </div>

        <button className='button' type="submit">Enviar</button>

      </form>
      <ToastContainer className={styles.toast}/>
    </div>
  )
}