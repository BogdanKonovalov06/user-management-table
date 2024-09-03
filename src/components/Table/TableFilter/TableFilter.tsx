import { Collapse, CollapseProps, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterValues,
  setFilteredUsers,
} from '../../../state/users/usersSlice';
import { filterUsers } from '../../../utils/filterUsers';
import { RootState } from '../../../state/store';
import { inputs } from './Inputs';
import FilterIcon from '../../../assets/icons/FilterIcon';

export type FieldType = {
  username: string;
  name: string;
  email: string;
  phone: string;
};

export const TableFilter = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const filter = useSelector((state: RootState) => state.users.filter);
  const dispatch = useDispatch();

  const onValuesChange = (values: FieldType) => {
    const updatedFilter = { ...filter, ...values };

    dispatch(setFilterValues(updatedFilter));

    const filtered = filterUsers(users, updatedFilter);
    dispatch(setFilteredUsers(filtered));
  };

  const FilterLabel = () => {
    return (
      <p
        style={{
          display: 'flex',
          gap: '10px',
          alignContent: 'center',
          margin: '0',
        }}
      >
        <FilterIcon /> <b>Filter</b>
      </p>
    );
  };

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <FilterLabel />,
      children: (
        <Form name="filter" onValuesChange={onValuesChange}>
          {inputs.map((input) => (
            <Form.Item<FieldType> label={input.label} name={input.name}>
              <Input variant="filled" />
            </Form.Item>
          ))}
        </Form>
      ),
    },
  ];

  return (
    <div>
      <Collapse items={items} ghost />
    </div>
  );
};
