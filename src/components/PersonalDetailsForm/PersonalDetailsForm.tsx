// PersonalDetailsForm.tsx
import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem } from '@material-ui/core';

const PersonalDetailsForm: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField label="Name" {...field} />}
      />
      {/* Other form fields... */}
    </div>
  );
};

export default PersonalDetailsForm;
