import { User, Role } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@company.com',
    role: Role.Admin,
    department: 'IT',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-01-15'),
  },
  {
    id: '2',
    name: 'Support User',
    email: 'support@company.com',
    role: Role.ITSupport,
    department: 'IT',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-03-10'),
  },
  {
    id: '3',
    name: 'Employee User',
    email: 'employee@company.com',
    role: Role.Employee,
    department: 'Marketing',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-05-20'),
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: Role.Employee,
    department: 'HR',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-02-05'),
  },
  {
    id: '5',
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: Role.ITSupport,
    department: 'IT',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-04-12'),
  },
];