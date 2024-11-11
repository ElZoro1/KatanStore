// src/components/admin/AdminUpload.js
import React, { useState } from 'react';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './AdminUpload.css';

const AdminUpload = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [sizes, setSizes] = useState('');
  const [category, setCategory] = useState('home'); // Nuevo estado para categoría
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Por favor, selecciona una imagen");
      return;
    }

    setUploading(true);

    const storageRef = ref(storage, `products/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      null,
      (error) => {
        console.error("Error de subida:", error);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        
        await addDoc(collection(db, 'products'), {
          name: productName,
          price: parseFloat(price),
          sizes: sizes.split(',').map(size => size.trim()),
          category: category, // Almacenar la categoría
          imageUrl: downloadURL,
        });

        setProductName('');
        setPrice('');
        setSizes('');
        setCategory('home');
        setFile(null);
        setUploading(false);
        alert("Producto subido correctamente");
      }
    );
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Subir Nuevo Producto</h2>
      <form className="upload-form" onSubmit={handleUpload}>
        <label>Nombre del producto</label>
        <input 
          type="text" 
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          placeholder="Nombre del producto" 
          required 
        />
        
        <label>Precio</label>
        <input 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="Precio del producto" 
          required 
        />
        
        <label>Tallas (separadas por comas)</label>
        <input 
          type="text" 
          value={sizes} 
          onChange={(e) => setSizes(e.target.value)} 
          placeholder="Ejemplos: S, M, L, XL" 
          required 
        />

        <label>Categoría</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        >
          <option value="home">Home</option>
          <option value="colecciones">Colecciones</option>
        </select>
        
        <label>Imagen del producto</label>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])} 
          required 
        />
        
        <button type="submit" className="upload-button" disabled={uploading}>
          {uploading ? "Subiendo..." : "Subir producto"}
        </button>
      </form>
    </div>
  );
};

export default AdminUpload;
    