// DataTable.tsx
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store'; // Adjust the path based on your project structure

interface User {
  name: string;
  age: number;
  // Add other properties as needed
}

const columns: TableColumn<User>[] = [
  { name: 'Name', selector: (row) => row.name, sortable: true },
  { name: 'Age', selector: (row) => row.age, sortable: true },
  // Add more columns as needed
];

const UsersDataTable: React.FC = () => {
  const users = useSelector((state: RootState) => state.user.users);

  return <DataTable<User> columns={columns} data={users} />;
};

export default UsersDataTable;
