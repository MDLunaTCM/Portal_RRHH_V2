export type UserRole = 'employee' | 'manager' | 'hr_admin' | 'recruiter' | 'it_admin';

export type VacationStatus = 'pending' | 'approved' | 'rejected' | 'cancelled';
export type RequisitionStatus = 'draft' | 'submitted' | 'approved' | 'rejected';
export type CandidateStatus = 'new' | 'screening' | 'interview' | 'offer' | 'hired' | 'rejected';
export type OnboardingStatus = 'not_started' | 'in_progress' | 'completed';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'intern';
export type MovementType = 'hire' | 'termination' | 'department_change' | 'position_change';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  role: UserRole;
  jobTitle: string;
  department: string;
  location: string;
  manager?: string;
  phone?: string;
  startDate: string;
  employmentType: EmploymentType;
}

export interface VacationRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  startDate: string;
  endDate: string;
  days: number;
  type: string;
  status: VacationStatus;
  reason?: string;
  submittedDate: string;
  approvedBy?: string;
  approvedDate?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: string;
  priority: 'normal' | 'high' | 'urgent';
  publishedDate: string;
  publishedBy: string;
  pinned: boolean;
}

export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  issueDate: string;
  size: string;
}

export interface Requisition {
  id: string;
  title: string;
  department: string;
  hiringManager: string;
  openings: number;
  employmentType: EmploymentType;
  status: RequisitionStatus;
  submittedDate: string;
  justification?: string;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  status: CandidateStatus;
  appliedDate: string;
  recruiter: string;
}

export interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  required: boolean;
  completed: boolean;
  dueDate?: string;
  category: string;
}

export interface EmployeeMovement {
  id: string;
  employeeId: string;
  employeeName: string;
  movementType: MovementType;
  date: string;
  fromValue?: string;
  toValue?: string;
  details?: string;
}

export interface KnowledgeArticle {
  id: string;
  title: string;
  content: string;
  category: string;
  published: boolean;
  createdDate: string;
  updatedDate: string;
  author: string;
}
