import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [age, setAge] = useState();
  const [description, setDescription] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        age,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Age</label>
        <br />
        <input type="number" onChange={(e) => setAge(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
export default ProductForm;
