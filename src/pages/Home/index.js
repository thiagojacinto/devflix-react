import React, { useState, useEffect } from "react";
import PageDefault from "../PageDefault";
import Categories from "../Categories";
import mockData from "../../__test__/mock-data/data.json";

export function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // fetch(mockData)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setCategories(result);
    //   })
    //   .catch((err) => console.err);
    setCategories(mockData.categorias);
  }, []);

  return (
    <PageDefault>
      <Categories categoriesList={categories} />
    </PageDefault>
  );
}

export default Home;
