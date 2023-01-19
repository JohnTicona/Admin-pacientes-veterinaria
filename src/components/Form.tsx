import { useEffect, useState } from 'react';
import useForm from '../hooks/useForm';
import Alert from './Alert';
import Swal from 'sweetalert2';
import { PropsForm } from '../types';
import { generateId } from '../helpers';

const Form = ({ addPatient, currentPatient, editPatient }: PropsForm) => {
  const [patient, onInputChange, reset, setPatient] = useForm();
  const { pet, owner, email, date, symptoms } = patient;
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if ([pet, owner, email, date, symptoms].includes('')) {
      return setError(true);
    }
    setError(false);

    if (currentPatient.id) {
      editPatient(patient);
      Swal.fire('Editado!', 'Paciente editado exitósamente!', 'success');
    } else {
      addPatient({ ...patient, id: generateId() });
      Swal.fire('Creado!', 'Paciente creado exitósamente!', 'success');
    }
    reset();
  };

  useEffect(() => {
    if (currentPatient.id) {
      setPatient(currentPatient);
    }
  }, [currentPatient]);

  return (
    <div className='md:w-1/2 lg:w-2/5 mb-10'>
      <h2 className='text-3xl font-black text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-2 mb-4 text-center'>
        Añade Pacientes y{' '}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-6 px-5'
      >
        {error && (
          <Alert bg='bg-red-500'>Todos los campos son obligatorios</Alert>
        )}
        <div className='mb-5'>
          <label
            htmlFor='pet'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre mascota:
          </label>
          <input
            id='pet'
            name='pet'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Nombre de la mascota'
            value={pet}
            onChange={onInputChange}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='owner'
            className='block text-gray-700 font-bold uppercase'
          >
            Nombre propietario:
          </label>
          <input
            id='owner'
            name='owner'
            type='text'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Nombre del propietario'
            value={owner}
            onChange={onInputChange}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-bold uppercase'
          >
            Correo:
          </label>
          <input
            id='email'
            name='email'
            type='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Correo de contacto'
            value={email}
            onChange={onInputChange}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='date'
            className='block text-gray-700 font-bold uppercase'
          >
            Alta:
          </label>
          <input
            id='date'
            name='date'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={onInputChange}
          />
        </div>

        <div className='mb-5'>
          <label
            htmlFor='symptoms'
            className='block text-gray-700 font-bold uppercase'
          >
            Alta:
          </label>

          <textarea
            id='symptoms'
            name='symptoms'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe los síntomas'
            value={symptoms}
            onChange={onInputChange}
          ></textarea>
        </div>

        <input
          type='submit'
          className='bg-indigo-600 text-white uppercase w-full p-3 font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md'
          value={currentPatient.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
