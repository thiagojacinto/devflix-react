import React from "react";
import styled from "styled-components";

import Carousel from "../../components/Carousel";

export const CategoriesWrapper = styled.section`
  width: 100%;
`;

function Categories({ categoriesList = [] }) {
  return (
    <>
      {categoriesList.length > 0 ? (
        categoriesList.map((category) => {
          return (
            <CategoriesWrapper key={category.titulo + category.cor}>
              {/* {console.log(`Lista de categorias > Videos: ${[category.videos]}`)}; */}
              <h3>{category.titulo}</h3>
              <Carousel items={category.videos} categoryColor={category.cor} />
            </CategoriesWrapper>
          );
        })
      ) : (
        <h3>Categoria vazia :(</h3>
      )}
    </>
  );
}

export default Categories;
