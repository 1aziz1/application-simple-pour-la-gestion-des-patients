import React, { useState, useEffect } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/layer');
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Patients List</h2>
      <tr>
        {patients.map(patient => (
          <tr>
            <td key={patient.id}>{patient.name}</td><td key={patient.id}>{patient.lastname}</td><td key={patient.id}>{patient.assurance}</td> 
           <td key={patient.id}>{patient.bill}</td>
          </tr>

        ))}
      </tr>
    </div>
  );
};

export default PatientList;
