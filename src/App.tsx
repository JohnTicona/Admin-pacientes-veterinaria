import { useEffect, useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import PatientList from './components/PatientList';
import { Patient } from './types';

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentPatient, setCurrentPatient] = useState<Patient>({
    id: '',
    pet: '',
    owner: '',
    email: '',
    date: '',
    symptoms: '',
  });

  const patientLS = JSON.parse(localStorage.getItem('patients') || '[]');

  const selectCurrentPatient = (patient: Patient) => {
    setCurrentPatient(patient);
  };

  const addPatient = (patient: Patient) => {
    setPatients([...patients, patient]);
  };

  const editPatient = (patient: Patient) => {
    setPatients(patients.map(p => (p.id === patient.id ? patient : p)));
    setCurrentPatient({
      id: '',
      pet: '',
      owner: '',
      email: '',
      date: '',
      symptoms: '',
    });
  };

  const deletePatient = (patientId: string) => {
    setPatients(patients.filter(p => p.id !== patientId));
  };

  useEffect(() => {
    setPatients(patientLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  return (
    <div className='container mx-auto pt-8'>
      <Header />
      <div className='md:flex mt-10 mx-4 md:mx-0 gap-5'>
        <Form
          addPatient={addPatient}
          currentPatient={currentPatient}
          editPatient={editPatient}
        />
        <PatientList
          patients={patients}
          selectCurrentPatient={selectCurrentPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
};

export default App;
