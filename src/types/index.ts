export interface Patient {
  id: string;
  pet: string;
  owner: string;
  email: string;
  date: string;
  symptoms: string;
}

export interface PropsForm {
  currentPatient: Patient;
  addPatient: (p: Patient) => void;
  editPatient: (p: Patient) => void;
}

export interface PropsListPatients {
  patients: Patient[];
  selectCurrentPatient: (p: Patient) => void;
  deletePatient: (p: string) => void;
}

export interface PropsPatient {
  patient: Patient;
  selectCurrentPatient: (p: Patient) => void;
  deletePatient: (p: string) => void;
}

export interface PropsError {
  children: React.ReactNode;
  bg: string;
}
