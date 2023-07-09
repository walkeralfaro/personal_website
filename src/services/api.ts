// Este script se encarga de realizar el POST request hacia el backend
// Se define el tipo <DataToSend> que osn los campos del email

interface DataToSend {
  name: string;
  email: string;
  subject: string;
  message: string;
  test: boolean;
}

export const createPost = async (dataToSend: DataToSend, contact_api: RequestInfo | URL) => {

  // Cabecera del request POST
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dataToSend),
  };

  console.log(requestOptions);
  

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