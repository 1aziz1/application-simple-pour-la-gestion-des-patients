import React, { useState } from 'react';
import Modal from 'react-modal';
import './modalstyle.css';


const AddPatient = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    assurance: '',
    bill: '',
  });

  const openAddModal = () => {
    setIsAdding(true);
  };

  const closeAddModal = () => {
    setIsAdding(false);
    setFormData({
      id: '',
      name: '',
      lastname: '',
      assurance: '',
      bill: '',
    });
  };

  const addNewPatient = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/layer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add a new patient');
      }

      window.alert('New patient added successfully');
      console.log('New patient added successfully');
      closeAddModal();
      // You may want to update the patient list or perform other actions after adding
    } catch (error) {
      console.error('Error adding a new patient:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      
      {/* Display patient list */}
      <button
          className='addNewPatient'   onClick ={openAddModal}>Add New Patient</button>

      {/* Add Modal */}
      <Modal
        overlayClassName="modal-overlay"
        className="custom-modal"
        isOpen={isAdding}
        onRequestClose={closeAddModal}
        contentLabel="Add Patient Modal"
        ariaHideApp={false}
      >

      
        <form>
        <div className='inputs'>
          <div className="modal-content">
            <h2>Add New Patient</h2>
            {/* Form inputs for adding */}
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            </label>
            <label>
              Assurance:
              <input
                type="text"
                name="assurance"
                value={formData.assurance}
                onChange={handleChange}
              />
            </label>
            <label>
              Bill:
              <input
                type="text"
                name="bill"
                value={formData.bill}
                onChange={handleChange}
              />
            </label>
            <div className="modal-buttons">
              <button type="button" className='addpatient' onClick={addNewPatient}>
                Add Patient
              </button>
              <button type="button" className='closeAddmodel'  onClick={closeAddModal}>
                Cancel
              </button>
            </div>
          </div>
          </div>
        </form>
        
      </Modal>
    </div>
  );
};

export default AddPatient;
