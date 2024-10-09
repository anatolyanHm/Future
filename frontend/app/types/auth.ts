export interface RegistrationFormData {
  email: string;
  password: string;
  phoneNumber: string;
  role: 'user' | 'merchant';
}

export interface LoginFormData {
  email: string;
  password: string;
}

export type SignUpData = Omit<RegistrationFormData, 'role'>;

export type SignInData = LoginFormData;

export interface SignUpResponse {
  uid: string;
}

export interface SignInResponse {
  uid: string;
}
