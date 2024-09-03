import './App.css';
import { Suspense, useEffect } from 'react';
import { getUsers } from './api/getUsers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import { setUsers } from './state/users/usersSlice';
import { TableComponent } from './components/Table/Table';

function App() {
  const users = useSelector((state: RootState) => state.users.users);
  const filteredUsers = useSelector(
    (state: RootState) => state.users.filteredUsers
  );

  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const data = await getUsers();
    dispatch(setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const dataToDisplay = filteredUsers.length > 0 ? filteredUsers : users;

  return (
    <div>
      <h1>User Management Table</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TableComponent data={dataToDisplay} />
      </Suspense>
    </div>
  );
}

export default App;
