import { createSlice } from '@reduxjs/toolkit';
import { Filter, User } from '../../interfaces/User';
import { filterUsers } from '../../utils/filterUsers';

interface UsersState {
  users: User[];
  filteredUsers: User[];
  filter: Filter;
}

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  filter: {
    name: '',
    username: '',
    email: '',
    phone: '',
  },
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setFilteredUsers: (state, action) => {
      state.filteredUsers = action.payload;
    },
    setFilterValues: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
      state.filteredUsers = filterUsers(state.users, state.filter);
    },
  },
});

export const { setUsers, setFilteredUsers, setFilterValues } =
  usersSlice.actions;

export default usersSlice.reducer;
