import { User } from '../../interfaces/User';
import { Table } from 'antd';
import { TableFilter } from './TableFilter/TableFilter';

export const TableComponent = ({ data }: { data: User[] }) => {
  const columns = [
    { title: 'Username', dataIndex: 'username', key: 'username' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  ];

  return (
    <div>
      <TableFilter />
      <Table dataSource={data} columns={columns} />
    </div>
  );
};
