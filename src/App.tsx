// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import UserRegistrationForm from './UserRegistrationForm.tsx';
import UsersDataTable from './components/DataTable/DataTable.tsx';
import userReducer from './Store/userSlice.ts';

const theme = createTheme();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <UserRegistrationForm />
          <UsersDataTable />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
