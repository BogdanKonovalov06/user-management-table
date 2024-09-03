import { FieldType } from './TableFilter';

type InputType = {
  label: string;
  name: keyof FieldType;
};

export const inputs: InputType[] = [
  {
    label: 'Username',
    name: 'username',
  },
  {
    label: 'Name',
    name: 'name',
  },
  {
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Phone',
    name: 'phone',
  },
];
