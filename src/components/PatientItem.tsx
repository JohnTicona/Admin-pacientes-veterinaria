import { PropsPatient } from '../types';
import Swal from 'sweetalert2';

const PatientItem = ({
  patient,
  selectCurrentPatient,
  deletePatient,
}: PropsPatient) => {
  const { id, pet, owner, email, date, symptoms } = patient;

  const onDelete = (id: string) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡Un paciente eliminado no se puede recuperar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4338CA',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar',
    }).then(async result => {
      if (result.isConfirmed) {
        await deletePatient(id);
        Swal.fire('¡Eliminado!', 'Paciente eliminado.', 'success');
      }
    });
  };

  return (
    <div className='bg-white shadow-md mt-4 rounded-lg py-6 px-5'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {''}
        <span className='font-normal normal-case'>{pet}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario: {''}
        <span className='font-normal normal-case'>{owner}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Correo: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha alta: {''}
        <span className='font-normal normal-case'>{date}</span>
      </p>

      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Síntomas: {''}
        <span className='font-normal normal-case'>{symptoms}</span>
      </p>

      <div className='flex justify-between items-center mt-6'>
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-8 uppercase rounded-lg'
          onClick={() => selectCurrentPatient(patient)}
        >
          Editar
        </button>

        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 uppercase rounded-lg'
          onClick={() => onDelete(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PatientItem;
