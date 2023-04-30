// Este script se encarga de realizar el POST request hacia el backend
// Se define el tipo <FormData> que osn los campos del email

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const createPost = async (postData: FormData, contact_api: RequestInfo | URL) => {

  // Cabecera del request POST
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  };

  // Fetching al backend
  try {
    const response = await fetch(contact_api, requestOptions);
    const data = await response.json();

    if(!response.ok) { 
      throw new Error(data.error_code);
    };

    return data;
  } 
  catch (error) {
    throw error;
  }
};