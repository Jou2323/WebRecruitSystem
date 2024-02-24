import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext'; 
const ImageUpload = () => {
    const { token, logout } = useAuth();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(
        'http://localhost:8080/uploadIcon',
        formData,
        {
            
                headers: {
                  Authorization: `Bearer ${token}`,
                },
        }
      );

      console.log('Upload successful', response.data);
      // You can handle the response accordingly, e.g., update user profile with the new icon
    } catch (error) {
        console.error('Error fetching user profile:', error);
      }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Icon</button>
    </div>
  );
};

export default ImageUpload;
