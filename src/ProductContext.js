// src/ProductContext.js
import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
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
    { id: 19, img: 'ropa1.png', name: 'Sword Art Online', price: 15000, size: 'M', stock: 10 },
    { id: 20, img: 'pole1.png', name: 'Dragon Ball', price: 20000, size: 'L', stock: 8 },
    { id: 21, img: 'pole2.jpg', name: 'Dragon Ball', price: 18500, size: 'S', stock: 5 },
    { id: 22, img: 'pole3.png', name: 'Jujutsu Kaisen', price: 22000, size: 'M', stock: 7 },
    { id: 23, img: 'pole4.png', name: 'Kimetsu no Yaiba', price: 17000, size: 'L', stock: 6 },
    { id: 24, img: 'pole5.png', name: 'Kimetsu no Yaiba', price: 19000, size: 'M', stock: 4 },
    { id: 25, img: 'pole6.png', name: 'Naruto', price: 23000, size: 'S', stock: 9 },
    { id: 26, img: 'pole7.png', name: 'Naruto', price: 25000, size: 'L', stock: 3 },
    { id: 27, img: 'pole8.png', name: 'Bleach', price: 21000, size: 'M', stock: 2 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
