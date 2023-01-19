import { useState } from 'react';
import { Patient } from '../types';

const initialState = {
  id: '',
  pet: '',
  owner: '',
  email: '',
  date: '',
  symptoms: '',
};

const useForm = (
  state = initialState
): [Patient, (e: any) => void, () => void, any] => {
  const [formValue, setFormValue] = useState<Patient>(state);

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setFormValue(initialState);
  };

  return [formValue, onChange, reset, setFormValue];
};

export default useForm;
