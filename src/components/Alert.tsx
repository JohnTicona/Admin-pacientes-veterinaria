import { PropsError } from '../types';

const Alert = ({ children, bg }: PropsError) => {
  return (
    <p
      className={`${bg} text-gray-200 font-bold rounded-md text-center p-2 mb-4`}
    >
      {children}
    </p>
  );
};

export default Alert;
