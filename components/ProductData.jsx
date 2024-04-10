import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../utils/api';

const ProductData = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('ascending'); 
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setSortedProducts(data); 
    };

    fetchData();
  }, []);

 
  const handleSort = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (sortOrder === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setSortedProducts(sorted);
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Products</h1>
        <div>
          <button onClick={handleSort} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-4">
            {sortOrder === 'ascending' ? 'Sort by Price (Low to High)' : 'Sort by Price (High to Low)'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {sortedProducts.map(product => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductData;
