// UserRegistrationForm.tsx
import React from 'react';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addUser } from './Store/userSlice.ts';
import { User } from './Store/userSlice'; // Adjust the path based on your project structure

import PersonalDetailsForm from './components/PersonalDetailsForm/PersonalDetailsForm.tsx';
import AddressDetailForm from './components/AddressDetailForm/AddressDetailForm.tsx';

const schemaStep1 = yup.object().shape({
  name: yup.string().required().min(3),
  age: yup.number().required().positive().integer(),
  sex: yup.string().required().oneOf(['Male', 'Female']),
  mobile: yup.string().required().matches(/^[6-9]\d{9}$/, 'Invalid mobile number'),
  idType: yup.string().oneOf(['Aadhar', 'PAN']).required(),
  idNumber: yup.string().test('id-validation', 'Invalid ID number', function (value) {
    const idType = this.parent.idType;
    if (idType === 'Aadhar') {
      return /^[2-9]\d{11}$/.test(value || '');
    } else if (idType === 'PAN') {
      return /^[A-Za-z0-9]{10}$/.test(value || '');
    }
    return true;
  }),
});

const schemaStep2 = yup.object().shape({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().optional(),
  pincode: yup.number().optional().integer(),
});

interface UserRegistrationFormProps {}

const UserRegistrationForm: React.FC<UserRegistrationFormProps> = () => {
  const methods = useForm({
    resolver: yupResolver(schemaStep1),
  });

  const dispatch = useDispatch();

  const onSubmitStep1: SubmitHandler<Record<string, any>> = (data) => {
    // methods.clear(); // Clear form values and errors
  };

  const onSubmitStep2: SubmitHandler<Record<string, any>> = () => {
    const { idNumber, ...userData } = methods.getValues();
    dispatch(addUser({ ...userData, idNumber: idNumber || '' }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmitStep1)}>
        <PersonalDetailsForm />
        <button type="submit">Next</button>
      </form>
      <form onSubmit={methods.handleSubmit(onSubmitStep2)}>
        <AddressDetailForm />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default UserRegistrationForm;
