import { Users, CircleCheck as CheckCircle, Clock, CircleAlert as AlertCircle, TrendingUp, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { User } from '@/types';

interface ManagerDashboardProps {
  user: User;
}

export function ManagerDashboard({ user }: ManagerDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manager Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage your team and review pending requests
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Team Members</p>
                <p className="text-2xl font-bold mt-1">8</p>
                <p className="text-xs text-muted-foreground mt-1">direct reports</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Approvals</p>
                <p className="text-2xl font-bold mt-1">5</p>
                <p className="text-xs text-muted-foreground mt-1">require your attention</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Onboarding</p>
                <p className="text-2xl font-bold mt-1">2</p>
                <p className="text-xs text-muted-foreground mt-1">in progress</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
                <p className="text-2xl font-bold mt-1">3</p>
                <p className="text-xs text-muted-foreground mt-1">actively recruiting</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Vacation Requests</CardTitle>
            <Badge variant="warning">5 Pending</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar name="Sarah Johnson" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Dec 23-27 (5 days)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center gap-3">
                  <Avatar name="Michael Chen" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Jan 15-19 (5 days)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name="Emily Rodriguez" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Feb 10-14 (5 days)</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name="Sarah Johnson" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Senior Developer</p>
                  </div>
                </div>
                <Badge variant="success">Active</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name="Michael Chen" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Michael Chen</p>
                    <p className="text-xs text-muted-foreground">Product Designer</p>
                  </div>
                </div>
                <Badge variant="success">Active</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name="Emily Rodriguez" size="sm" />
                  <div>
                    <p className="font-medium text-sm">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Marketing Manager</p>
                  </div>
                </div>
                <Badge variant="warning">On Leave</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name="David Kim" size="sm" />
                  <div>
                    <p className="font-medium text-sm">David Kim</p>
                    <p className="text-xs text-muted-foreground">Data Analyst</p>
                  </div>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Team Members
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Onboarding Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar name="Alex Thompson" size="sm" />
                    <span className="text-sm font-medium">Alex Thompson</span>
                  </div>
                  <span className="text-sm font-medium">80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Avatar name="Jessica Lee" size="sm" />
                    <span className="text-sm font-medium">Jessica Lee</span>
                  </div>
                  <span className="text-sm font-medium">45%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upcoming Time Off</CardTitle>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar name="Emily Rodriguez" size="sm" />
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Dec 20-22</p>
                  </div>
                </div>
                <Badge variant="success">Approved</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar name="David Kim" size="sm" />
                  <div>
                    <p className="text-sm font-medium">David Kim</p>
                    <p className="text-xs text-muted-foreground">Jan 5-9</p>
                  </div>
                </div>
                <Badge variant="success">Approved</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
