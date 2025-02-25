import axios from "axios";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const fetchProducts = () => {
        try {
          axios.get('https://fakestoreapi.com/products')
            .then((response) => {
              const productsData = response.data
              setProducts(productsData)
              setLoading(false);
            })
        } catch (error) {
          console.error("Error fetching product data:", error);
          setError('Failed to fetch product, Please try again later')
          setLoading(false)
        }
      }
    
      useEffect(() => {
        fetchProducts();
      }, []);
    
      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
  return {
      loading,
      error,
      searchQuery,
      handleSearch,
      filteredProducts
  }
  
}

export default useFetchProducts