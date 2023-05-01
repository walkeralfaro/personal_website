import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastifySuccess = (id: any) => {
  toast.update(id,{ 
    render: 'Mensaje enviado 📬', 
    type: 'success', 
    theme: 'colored',
    isLoading: false,
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
}


export const toastifyError = (id: any) => {
  toast.update(id,{ 
    render: "Hubo un problema 💔", 
    type: "error", 
    isLoading: false,
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
  });
}