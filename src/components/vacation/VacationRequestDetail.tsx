import { X, Calendar, User, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VacationStatus } from '@/types';

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

interface VacationRequestDetailProps {
  request: VacationRequest;
  onClose: () => void;
  canApprove?: boolean;
}

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

export function VacationRequestDetail({ request, onClose, canApprove }: VacationRequestDetailProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Vacation Request Details</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{request.type}</h3>
            {getStatusBadge(request.status)}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Employee</p>
                <p className="text-sm text-muted-foreground">{request.employeeName}</p>
                <p className="text-xs text-muted-foreground">{request.department}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Duration</p>
                <p className="text-sm text-muted-foreground">
                  {request.startDate} to {request.endDate}
                </p>
                <p className="text-xs text-muted-foreground">{request.days} business days</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
              <FileText className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium mb-1">Reason</p>
              <p className="text-sm text-muted-foreground">{request.reason}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-3">Request Timeline</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <div className="w-px h-full bg-border"></div>
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm font-medium">Request Submitted</p>
                  <p className="text-xs text-muted-foreground">{request.submittedDate}</p>
                </div>
              </div>

              {request.status === 'approved' && (
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-success"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Approved by Manager</p>
                    <p className="text-xs text-muted-foreground">2024-12-02</p>
                  </div>
                </div>
              )}

              {request.status === 'pending' && (
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-warning"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Pending Manager Approval</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {canApprove && request.status === 'pending' && (
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline">Reject</Button>
              <Button>Approve</Button>
            </div>
          )}

          {!canApprove && request.status === 'pending' && (
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline">Cancel Request</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
