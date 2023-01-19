import { PropsListPatients } from '../types';
import Alert from './Alert';
import PatientItem from './PatientItem';

const PatientList = ({
  patients,
  selectCurrentPatient,
  deletePatient,
}: PropsListPatients) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 mb-10 md:h-screen md:overflow-y-scroll'>
      <h2 className='text-3xl font-black text-center'>Listado Pacientes</h2>

      <p className='text-lg mt-2 mb-4 text-center'>
        Administra tus{' '}
        <span className='text-indigo-600 font-bold '>Pacientes y citas</span>
      </p>

      {patients.length > 0 ? (
        patients.map(patient => (
          <PatientItem
            key={patient.id}
            patient={patient}
            selectCurrentPatient={selectCurrentPatient}
            deletePatient={deletePatient}
          />
        ))
      ) : (
        <Alert bg='bg-gray-700'>No hay pacientes</Alert>
      )}
    </div>
  );
};

export default PatientList;
