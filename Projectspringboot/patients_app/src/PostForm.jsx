import React, { useState } from 'react';

const PostForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    assurance: '',
    bill: '',
  });

  const { id, name, lastname, assurance, bill } = formData;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch('http://localhost:8080/api/layer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add patient');
      }

      console.log('Patient added successfully');
    } catch (error) {
      console.error('Error adding patient:', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
           
          <input
            type="text"
            name="id"
            value={id}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={changeHandler}
          />
          <input
            type="text"
            name="assurance"
            value={assurance}
            onChange={changeHandler}
          />
          <input
            type="number"
            name="bill"
            value={bill}
            onChange={changeHandler}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
