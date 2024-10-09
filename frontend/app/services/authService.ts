import axios, { AxiosError } from 'axios';

import { SignUpData, SignUpResponse, SignInData, SignInResponse } from '@/app/types/auth';
import { AUTH_ENDPOINTS } from '@/app/constants/api';

export const signUp = async (data: SignUpData): Promise<SignUpResponse> => {
  try {
    const response = await axios.post<SignUpResponse>(AUTH_ENDPOINTS.SIGN_UP, data, {
      withCredentials: true,
    });
    const { uid } = response.data;

    if (!uid) {
      throw new Error('Token is undefined. Please verify server response.');
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};

export const signIn = async (data: SignInData): Promise<void> => {
  try {
    const response = await axios.post<SignInResponse>(AUTH_ENDPOINTS.SIGN_IN, data, {
      withCredentials: true,
    });

    console.log(response)
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError;
  }
};