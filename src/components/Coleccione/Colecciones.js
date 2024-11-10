// src/components/Coleccione/Colecciones.js
import React, { useState } from 'react';
import { useCart } from '../CartContext'; 
import styles from './Coleccione.module.css';

const categories = ['Dragon Ball', 'Naruto', 'One Piece', 'Attack on Titan', 'Sword Art Online', 'Jujutsu Kaisen'];
const sizes = ['S', 'M', 'L', 'XL'];

const products = [
  { id: 1, name: 'Polera Goku', category: 'Dragon Ball', size: 'M', price: 100000, stock: 5, image: 'pole1.png' },
  { id: 2, name: 'Polera Goku pequeño', category: 'Dragon Ball', size: 'L', price: 950000, stock: 3, image: 'pole3.png' },
  { id: 3, name: 'Polera Goku', category: 'Dragon Ball', size: 'XL', price: 90000, stock: 9, image: 'pole9.png' },
  { id: 4, name: 'Polera One Piece', category: 'One Piece', size: 'L', price: 120000, stock: 5, image: 'pole10.png' },
  { id: 5, name: 'Polera One Piece', category: 'One Piece', size: 'XL', price: 120000, stock: 6, image: 'pole11.png' },
  { id: 6, name: 'Polera One Piece', category: 'One Piece', size: 'S', price: 120000, stock: 7, image: 'pole12.png' },
  { id: 7, name: 'Polera Naruto', category: 'Naruto', size: 'M', price: 120000, stock: 2, image: 'p1.png' },
  { id: 8, name: 'Polera Naruto', category: 'Naruto', size: 'L', price: 120000, stock: 2, image: 'p2.png' },
  { id: 9, name: 'Polera Naruto', category: 'Naruto', size: 'S', price: 120000, stock: 2, image: 'p3.png' },
  { id: 10, name: 'Polera Attack on Titan', category: 'Attack on Titan', size: 'S', price: 120000, stock: 2, image: 'p4.png' },
  { id: 11, name: 'Polera Attack on Titan', category: 'Attack on Titan', size: 'L', price: 120000, stock: 2, image: 'p5.png' },
  { id: 12, name: 'Polera Attack on Titan', category: 'Attack on Titan', size: 'M', price: 120000, stock: 2, image: 'p6.png' },
  { id: 13, name: 'Sword Art Online', category: 'Sword Art Online', size: 'L', price: 120000, stock: 2, image: 'p7.png' },
  { id: 14, name: 'Sword Art Online', category: 'Sword Art Online', size: 'XL', price: 120000, stock: 2, image: 'p8.png' },
  { id: 15, name: 'Sword Art Online', category: 'Sword Art Online', size: 'S', price: 120000, stock: 2, image: 'p9.png' },
  { id: 16, name: 'Polera Jujutsu Kaisen', category: 'Jujutsu Kaisen', size: 'S', price: 120000, stock: 2, image: 'p10.png' },
  { id: 17, name: 'Polera Jujutsu Kaisen', category: 'Jujutsu Kaisen', size: 'M', price: 120000, stock: 2, image: 'p11.png' },
  { id: 18, name: 'Polera Jujutsu Kaisen', category: 'Jujutsu Kaisen', size: 'L', price: 120000, stock: 2, image: 'p12.png' },
];

function Colecciones() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const sizeMatch = selectedSize ? product.size === selectedSize : true;
    return categoryMatch && sizeMatch;
  });

  return (
    <div className={styles.coleccionesContainer}>
      <header className={styles.header}>
        <h1>COLECCIONES</h1>
      </header>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.categories}>
            <h3>Categorías</h3>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`${styles.button} ${selectedCategory === category ? styles.selected : ''}`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sizes}>
            <h3>Tallas Disponibles</h3>
            <ul>
              {sizes.map((size, index) => (
                <li
                  key={index}
                  onClick={() => handleSizeClick(size)}
                  className={`${styles.button} ${selectedSize === size ? styles.selected : ''}`}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <section className={styles.productList}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.image} alt={product.name} className={styles.productImage} />
              <h4>{product.name}</h4>
              <p>Precio: ${product.price.toLocaleString()}</p>
              <p>Stock: {product.stock} disponibles</p>
              <button 
                className={styles.addToCartButton} 
                onClick={() => addToCart(product)}
              >
                Agregar al Carrito
              </button>
            </div>
          ))}
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <h1>CONTACTANOS</h1>
          <p>+56 9 8765 4321</p>
          <p>contacto@katanstore.com</p>
        </div>

        <div className={styles.footerLogo}>
          <img src="/1.png" alt="Katanstore Logo" className="logo" />
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </div>

        <div className={styles.hours}>
          <h1>Horario de Atención</h1>
          <p>Lunes a Viernes: 9:00 - 18:00</p>
          <p>Sábados: 10:00 - 14:00</p>
        </div>
      </footer>
    </div>
  );
}

export default Colecciones;
