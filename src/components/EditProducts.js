import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://localhost:8000/api/product/";

const EditProducts = () => {
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [stock, setStock] = useState(0)
  const navigate = useNavigate()
  const { id } = useParams()

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      description: description,
      price: price,
      stock: stock,
    });
    navigate("/");
  };

  useEffect(() => {
    const getProductById = async () => {
      const response = await axios.get(`${endpoint}${id}`)
      setDescription(response.data.description)
      setPrice(response.data.price)
      setStock(response.data.stock)
    }
    getProductById()
  }, [])
  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Stock</label>
          <input
            type="number"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProducts;
