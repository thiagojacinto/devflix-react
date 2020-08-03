import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";

const FormWrapper = styled.div`
  width: 100%;
  padding: 3em 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const theme = {
  color: "var(--secondary_color)",
  bg: "var(--secondary_bg)",
};

export function AddMovieForm() {
  let [values, setValues] = useState({
    title: "",
    url: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table({ values });

    alert(`${JSON.stringify(values)}. Do you confirm? `);
  };

  const handleChange = (event) => {
    event.preventDefault();

    const key = event.target.name;
    const { value } = event.target;

    setValues({
      ...values,
      [key]: value,
    });
  };

  return (
    <FormWrapper>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="_videoTitle">YouTube video title:</label>
        <input type="text" name="title" id="title" onChange={handleChange} />

        <label htmlFor="_videoURL" autoComplete="false">
          URL:
        </label>
        <input type="text" name="url" id="url" onChange={handleChange} />

        <ThemeProvider theme={theme}>
          <Button>Add new movie</Button>
        </ThemeProvider>
      </Form>
    </FormWrapper>
  );
}

export default AddMovieForm;
