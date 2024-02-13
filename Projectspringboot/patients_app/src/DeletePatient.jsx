import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './modalstyle.css'

const DeletePatient = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    assurance: '',
    bill: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch the list of patients when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/layer');
      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }

      const data = await response.json();
      setPatients(data);
    } catch (error) {
      console.error('Error fetching patients:', error.message);
    }
  };

  const deletePatient = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/layer/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete patient');
      }

      console.log('Patient deleted successfully');
      // Update the patient list after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting patient:', error.message);
    }
  };

  const openEditModal = (patient) => {
    setFormData(patient);
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    // Reset form data when the modal is closed
    setFormData({
      id: '',
      name: '',
      lastname: '',
      assurance: '',
      bill: '',
    });
  };

  const updatePatient = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/layer/${formData.id}`,
        {
          method: 'PUT', // or 'PATCH' depending on your update strategy
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update patient');
      }
      window.alert('Patient updated successfully');

      console.log('Patient updated successfully');
      // Close the modal and update the patient list after modification
      closeEditModal();
      fetchData();
    } catch (error) {
      console.error('Error updating patient:', error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
     
    <><h1>My patients</h1>
    <div className="patientList">
      
      <ul className="patientsContainer">
        {patients.map((patient) => (
          <li key={patient.id} className="patientItem">
            <div className="patientInfo">
              <p><b>name: </b>{patient.name} <b>lastname: </b> {patient.lastname}</p>
              <p><b>Bill:</b> {patient.bill}</p>
              <p><b>Assurance:</b> {patient.assurance}</p>
            </div>
            <div className="patientActions">
              <button onClick={() => deletePatient(patient.id)}>Delete</button>
              <button onClick={() => openEditModal(patient)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div><Modal
      overlayClassName="modal-overlay"
      className="custom-modal"
      isOpen={isEditing}
      onRequestClose={closeEditModal}
      contentLabel="Edit Patient Modal"
      ariaHideApp={false} // Disable a11y warning
    >

        <form>
          <div className='inputs'>
            <h2>Edit  Patient</h2>
            <div>

              <input type="text" value={formData.id} disabled />
            </div>
            <div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange} />
            </div>
            <div>

              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange} />
            </div>
            <div>

              <input
                type="text"
                name="assurance"
                value={formData.assurance}
                onChange={handleChange} />
            </div>
            <div>

              <input
                type="number"
                name="bill"
                value={formData.bill}
                onChange={handleChange} />
            </div>
          </div>
          <div className='modalbuttons'>
            <button type="button" className='edit' onClick={updatePatient}>
              Update
            </button>
            <button type="button" className='delete' onClick={closeEditModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal></>
    
  );
        }

export default DeletePatient;
