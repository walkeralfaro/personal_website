import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Contact.module.scss';

export const Contact = () => {
  
  const{ register, reset, formState, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm();

  const onSubmit = ( data ) => {
    console.log(data);
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
  }, [formState])
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className={errors.name && styles.inputError}>name</label>
          <input type="text" id="name" className={errors.name && styles.inputError}
          {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
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
          <input type="text" id="email" {...register('email', {
            required: true, 
            pattern: /^\S+@\S+$/i,
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
            maxLength: 40,
          })} />
          {errors.subject?.type === 'required' && <p>El campo es requerido</p>}
          {errors.subject?.type === 'maxLength' && <p>Máximo 40 letras</p>}
        </div>
        <div>
          <label htmlFor="message">mensaje</label>
          <input type="text" id="message" {...register('message', {
            required: true,
            pattern: /^[^<>{}[\]\\\/]*$/i,
            maxLength: 300,
          })} />
          {errors.message?.type === 'required' && <p>El campo es requerido</p>}
          {errors.message?.type === 'pattern' && <p>No carácteres especiales</p>}
          {errors.message?.type === 'maxLength' && <p>Maximo 50 palabras</p>}
        </div>
        <input type="submit" value="Enviar" />

      </form>
    </div>
  )
}