import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Coutnries from "./components/Coutnries";
import Pagination from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]); //страны, по умолчанию - пустой массив
  const [loading, setLoading] = useState(false); //состояние загрузки
  const [currentPage, setCurrentPage] = useState(1); //для текущей страницы, по умолч. - первая страница
  const [quantity, setQuantity] = useState(10); //кол-во элементов, которые будут показаны на одной странице

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://restcountries.com/v2/all");
        setCountries(res.data);
      } catch (error) {
        console.error('Ошибка при загрузке стран:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getCountries();
  }, []);
  

  const lastCountries = currentPage * quantity;
  const firstCountries = lastCountries - quantity;
  const currentCountries = countries.slice(firstCountries, lastCountries);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <Coutnries countries={currentCountries} loading={loading} />
      <Pagination
        quantity={quantity}
        totalQuantity={countries.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
