import { Announcement } from '../types';

export const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'System Maintenance Scheduled',
    content: 'Our IT systems will be undergoing scheduled maintenance on Saturday, June 15th from 10:00 PM to 2:00 AM. During this time, all company systems including email, file sharing, and intranet will be unavailable. Please plan your work accordingly.',
    important: true,
    createdBy: 'IT Department',
    createdAt: new Date('2025-06-10'),
    updatedAt: new Date('2025-06-10'),
  },
  {
    id: '2',
    title: 'New Document Management System Launch',
    content: 'We are excited to announce the launch of our new document management system on July 1st. The new system will provide improved search capabilities, version control, and collaboration features. Training sessions will be scheduled in the coming weeks.',
    important: false,
    createdBy: 'IT Department',
    createdAt: new Date('2025-06-05'),
    updatedAt: new Date('2025-06-05'),
  },
  {
    id: '3',
    title: 'Security Alert: Phishing Emails',
    content: 'We have detected an increase in phishing attempts targeting our company. These emails appear to come from HR and ask for your login credentials. Please remember that legitimate company emails will never ask for your password. Report any suspicious emails to the IT security team immediately.',
    important: true,
    createdBy: 'Security Team',
    createdAt: new Date('2025-06-03'),
    updatedAt: new Date('2025-06-03'),
  },
  {
    id: '4',
    title: 'New Video Conferencing Guidelines',
    content: 'To improve the quality and effectiveness of our virtual meetings, we have published new video conferencing guidelines. These include best practices for scheduling, conducting, and participating in video calls. Please review the guidelines in the IT support documentation library.',
    important: false,
    createdBy: 'IT Department',
    createdAt: new Date('2025-05-28'),
    updatedAt: new Date('2025-05-28'),
  },
  {
    id: '5',
    title: 'IT Help Desk Hours Extended',
    content: 'Starting next week, the IT help desk will extend its hours to better support our global team. The new hours will be 7:00 AM to 7:00 PM, Monday through Friday. Support requests can be submitted through the help desk portal or by calling extension 4357.',
    important: false,
    createdBy: 'IT Support',
    createdAt: new Date('2025-05-25'),
    updatedAt: new Date('2025-05-25'),
  },
  {
    id: '6',
    title: 'Mandatory Security Training',
    content: 'All employees are required to complete the annual security awareness training by June 30th. The training takes approximately 1 hour to complete and includes modules on password security, phishing awareness, and safe browsing practices. You should have received an email with your login information.',
    important: true,
    createdBy: 'Security Team',
    createdAt: new Date('2025-05-20'),
    updatedAt: new Date('2025-05-20'),
  },
  {
    id: '7',
    title: 'Network Upgrade Complete',
    content: 'We are pleased to announce that the network infrastructure upgrade has been successfully completed. You should notice improved internet speeds, more reliable Wi-Fi coverage throughout the office, and better VPN performance for remote workers. Please report any connectivity issues to the IT help desk.',
    important: false,
    createdBy: 'IT Infrastructure Team',
    createdAt: new Date('2025-05-15'),
    updatedAt: new Date('2025-05-15'),
  }
];