/*import React, { useState, useEffect } from 'react';

const UpdatePatient = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    lastname: '',
    assurance: '',
    bill: '',
  });

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

  const updatePatient = async (id) => {
    try {
      // Fetch the details of the patient to be updated
      const response = await fetch(`http://localhost:8080/api/layer/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch patient details for update');
      }

      const patientDetails = await response.json();
      // Set the patient details in the form data state
      setFormData(patientDetails);

      // Perform the update by sending a PUT or PATCH request
      const updateResponse = await fetch(`http://localhost:8080/api/layer/${id}`, {
        method: 'PUT', // or 'PATCH' depending on your update strategy
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!updateResponse.ok) {
        throw new Error('Failed to update patient');
      }

      console.log('Patient updated successfully');
      // Update the patient list after successful update
      fetchData();
    } catch (error) {
      console.error('Error updating patient:', error.message);
    }
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Patients List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name}{' '}
            <button onClick={() => updatePatient(patient.id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Update Patient</h2>
      <form>
        <div>
          <label>ID: </label>
          <input type="text" name="id" value={formData.id} readOnly />
        </div>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={changeHandler} />
        </div>
        <div>
          <label>Lastname: </label>
          <input type="text" name="lastname" value={formData.lastname} onChange={changeHandler} />
        </div>
        <div>
          <label>Assurance: </label>
          <input type="text" name="assurance" value={formData.assurance} onChange={changeHandler} />
        </div>
        <div>
          <label>Bill: </label>
          <input type="number" name="bill" value={formData.bill} onChange={changeHandler} />
        </div>
        <button type="button" onClick={() => updatePatient(formData.id)}>Update Patient</button>
      </form>
    </div>
  );
};

export default UpdatePatient;
*/