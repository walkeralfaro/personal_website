import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SendEmail, DataForm } from './SendEmail';

export const Contact = () => {
  
  const{ register, reset, formState, formState: { errors, isSubmitSuccessful }, handleSubmit } = useForm();

  const onSubmit = ( data: DataForm ) => {
    SendEmail(data)
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
          <label htmlFor="name">name</label>
          <input type="text" {...register('name', {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            minLength: 2,
            maxLength: 30,
          })} />
          {errors.name?.type === 'required' && <p>El nombre no tiene un formato requerido</p>}
          {errors.name?.type === 'maxLength' && <p>El nombre debe tener menos de 30 letras</p>}
          {errors.name?.type === 'minLength' && <p>El nombre debe tener al menos 2 letras</p>}
          {errors.name?.type === 'pattern' && <p>El nombre sólo debe contener letras</p>}
        </div>
        <div>
          <label htmlFor="email">correo</label>
          <input type="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="subject">asunto</label>
          <input type="text" {...register('subject')} />
        </div>
        <div>
          <label htmlFor="message">mensaje</label>
          <input type="text" {...register('message')} />
        </div>
        <input type="submit" value="Enviar" />

      </form>
    </div>
  )
}