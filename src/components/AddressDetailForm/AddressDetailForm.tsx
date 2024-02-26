// AddressDetailForm.tsx
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem } from '@material-ui/core';
import axios from 'axios';

const AddressDetailForm: React.FC = () => {
  const { control, watch } = useFormContext();
  const country = watch('country');

  const fetchCountries = async (inputValue: string) => {
    const response = await axios.get(`https://restcountries.com/v2/name/${inputValue}`);
    return response.data.map((country: any) => country.name);
  };

  return (
    <div>
      <Controller
        name="address"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Address" {...field} />}
      />
      {/* Other form fields... */}
      {/* <Controller
        name="country"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <AsyncSelect
            label="Country"
            {...field}
            loadOptions={(inputValue: string) => fetchCountries(inputValue)}
          />
        )}
      /> */}
      {/* Other form fields... */}
    </div>
  );
};

export default AddressDetailForm;
