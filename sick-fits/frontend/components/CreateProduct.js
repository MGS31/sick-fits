import { useState } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice Shoes',
    price: 34234,
    description: 'These are the best shoes ever',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="description"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+Add Product</button>
      </fieldset>
    </Form>
  );
}
