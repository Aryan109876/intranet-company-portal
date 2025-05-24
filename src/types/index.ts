// User related types
export enum Role {
  Admin = 'admin',
  ITSupport = 'it_support',
  Employee = 'employee'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  department: string;
  avatar: string;
  joinDate: Date;
}

// Document related types
export enum DocumentCategory {
  Hardware = 'hardware',
  Software = 'software',
  Network = 'network',
  Security = 'security',
  Policies = 'policies',
  General = 'general'
}

export interface Document {
  id: string;
  title: string;
  description: string;
  content: string;
  category: DocumentCategory;
  tags: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

// Project related types
export enum ProjectStatus {
  NotStarted = 'not_started',
  InProgress = 'in_progress',
  OnHold = 'on_hold',
  Completed = 'completed',
  Canceled = 'canceled'
}

export enum ProjectPriority {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Critical = 'critical'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: Date;
  dueDate: Date;
  assignedTo: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  comments: Comment[];
}

export interface Comment {
  id: string;
  content: string;
  createdBy: string;
  createdAt: Date;
}

// Announcement related types
export interface Announcement {
  id: string;
  title: string;
  content: string;
  important: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}