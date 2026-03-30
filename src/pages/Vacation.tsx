import { useState } from 'react';
import { Plus, Calendar, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { EmptyState } from '@/components/ui/EmptyState';
import { User, VacationStatus } from '@/types';
import { VacationRequestForm } from '@/components/vacation/VacationRequestForm';
import { VacationRequestDetail } from '@/components/vacation/VacationRequestDetail';

interface VacationProps {
  user: User;
}

interface VacationRequest {
  id: string;
  startDate: string;
  endDate: string;
  days: number;
  type: string;
  status: VacationStatus;
  reason: string;
  submittedDate: string;
  employeeName: string;
  department: string;
}

const mockRequests: VacationRequest[] = [
  {
    id: '1',
    startDate: '2024-12-20',
    endDate: '2024-12-27',
    days: 5,
    type: 'Annual Leave',
    status: 'approved',
    reason: 'Holiday break with family',
    submittedDate: '2024-11-15',
    employeeName: 'John Doe',
    department: 'Engineering',
  },
  {
    id: '2',
    startDate: '2025-01-15',
    endDate: '2025-01-19',
    days: 5,
    type: 'Annual Leave',
    status: 'pending',
    reason: 'Personal time off',
    submittedDate: '2024-12-01',
    employeeName: 'John Doe',
    department: 'Engineering',
  },
  {
    id: '3',
    startDate: '2024-11-10',
    endDate: '2024-11-10',
    days: 1,
    type: 'Sick Leave',
    status: 'approved',
    reason: 'Medical appointment',
    submittedDate: '2024-11-09',
    employeeName: 'John Doe',
    department: 'Engineering',
  },
];

const mockApprovalRequests: VacationRequest[] = [
  {
    id: '4',
    startDate: '2024-12-23',
    endDate: '2024-12-27',
    days: 5,
    type: 'Annual Leave',
    status: 'pending',
    reason: 'Holiday vacation',
    submittedDate: '2024-12-01',
    employeeName: 'Sarah Johnson',
    department: 'Engineering',
  },
  {
    id: '5',
    startDate: '2025-01-15',
    endDate: '2025-01-19',
    days: 5,
    type: 'Annual Leave',
    status: 'pending',
    reason: 'Winter break',
    submittedDate: '2024-12-02',
    employeeName: 'Michael Chen',
    department: 'Design',
  },
];

function getStatusBadge(status: VacationStatus) {
  switch (status) {
    case 'approved':
      return <Badge variant="success">Approved</Badge>;
    case 'rejected':
      return <Badge variant="destructive">Rejected</Badge>;
    case 'pending':
      return <Badge variant="warning">Pending</Badge>;
    case 'cancelled':
      return <Badge variant="outline">Cancelled</Badge>;
  }
}

export function Vacation({ user }: VacationProps) {
  const [showForm, setShowForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<VacationRequest | null>(null);
  const isManagerOrHR = user.role === 'manager' || user.role === 'hr_admin';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Vacation Requests</h1>
          <p className="text-muted-foreground mt-1">
            Manage your time off requests and balances
          </p>
        </div>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available Days</p>
                <p className="text-3xl font-bold mt-1">15</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Used This Year</p>
              <p className="text-3xl font-bold mt-1">5</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
              <p className="text-3xl font-bold mt-1">2</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue={isManagerOrHR ? 'approvals' : 'my-requests'}>
        {isManagerOrHR && (
          <TabsList>
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="my-requests">My Requests</TabsTrigger>
            <TabsTrigger value="all">All Requests</TabsTrigger>
          </TabsList>
        )}

        {isManagerOrHR && (
          <TabsContent value="approvals">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Pending Approvals</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </CardHeader>
              <CardContent>
                {mockApprovalRequests.length === 0 ? (
                  <EmptyState
                    icon={Calendar}
                    title="No pending approvals"
                    description="All vacation requests have been reviewed"
                  />
                ) : (
                  <div className="space-y-4">
                    {mockApprovalRequests.map((request) => (
                      <div
                        key={request.id}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{request.employeeName}</h3>
                            <Badge variant="secondary">{request.department}</Badge>
                            {getStatusBadge(request.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {request.type} • {request.startDate} to {request.endDate} ({request.days}{' '}
                            days)
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{request.reason}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedRequest(request)}
                          >
                            View
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reject
                          </Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value={isManagerOrHR ? 'my-requests' : 'my-requests'}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Vacation Requests</CardTitle>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </CardHeader>
            <CardContent>
              {mockRequests.length === 0 ? (
                <EmptyState
                  icon={Calendar}
                  title="No vacation requests yet"
                  description="Create your first vacation request to get started"
                  action={
                    <Button onClick={() => setShowForm(true)}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Request
                    </Button>
                  }
                />
              ) : (
                <div className="space-y-4">
                  {mockRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => setSelectedRequest(request)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{request.type}</h3>
                          {getStatusBadge(request.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.startDate} to {request.endDate} ({request.days} days)
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Submitted on {request.submittedDate}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {isManagerOrHR && (
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Team Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[...mockApprovalRequests, ...mockRequests].map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{request.employeeName}</h3>
                          <Badge variant="secondary">{request.department}</Badge>
                          {getStatusBadge(request.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.type} • {request.startDate} to {request.endDate} ({request.days}{' '}
                          days)
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedRequest(request)}
                      >
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>

      {showForm && <VacationRequestForm onClose={() => setShowForm(false)} />}
      {selectedRequest && (
        <VacationRequestDetail
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
          canApprove={isManagerOrHR}
        />
      )}
    </div>
  );
}
