import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import PatientsList from './PatientsList.jsx'
import PostForm from './PostForm.jsx'
import DeletePatient from './DeletePatient.jsx'
import AddPatient from './AddPatient.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  
    
    <DeletePatient/>
    <AddPatient/>
  </React.StrictMode>,
)
