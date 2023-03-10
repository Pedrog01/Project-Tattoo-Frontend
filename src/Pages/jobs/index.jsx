import { useState } from 'react';
import "./style.scss"
import axios from 'axios';

function MyForm() {
  const [image, setImage] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setImage(file);
  }
    // Enviar o formData para o servidor

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
    </form>
  );

  function handleSubmit(event) {
    event.preventDefault();
    console.log(image)
  
    const formData = new FormData();
    formData.append('image', image);
  
    axios.post('http://localhost:3000/jobs_path', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      console.log(response.data);
    });
  }
}
  
  export default MyForm