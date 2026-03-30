import { Users, UserPlus, UserMinus, Clock, Briefcase, FileText, TrendingUp, CircleAlert as AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { User } from '@/types';

interface HRAdminDashboardProps {
  user?: User;
}

export function HRAdminDashboard({}: HRAdminDashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">HR Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of HR operations and pending actions
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-2xl font-bold mt-1">247</p>
                <p className="text-xs text-success mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" /> +12 this month
                </p>
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
                <p className="text-sm font-medium text-muted-foreground">Pending Requests</p>
                <p className="text-2xl font-bold mt-1">18</p>
                <p className="text-xs text-muted-foreground mt-1">across all departments</p>
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
                <p className="text-sm font-medium text-muted-foreground">Open Positions</p>
                <p className="text-2xl font-bold mt-1">15</p>
                <p className="text-xs text-muted-foreground mt-1">active requisitions</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Onboarding</p>
                <p className="text-2xl font-bold mt-1">8</p>
                <p className="text-xs text-muted-foreground mt-1">new hires in progress</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Employee Movements</CardTitle>
            <Button size="sm" variant="outline">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/10">
                  <UserPlus className="h-5 w-5 text-success" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">New Hire: Alex Thompson</p>
                  <p className="text-xs text-muted-foreground">
                    Senior Software Engineer - Engineering
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Today</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Promotion: Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">
                    Senior Developer → Lead Developer
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pb-4 border-b">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warning/10">
                  <FileText className="h-5 w-5 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Department Change: Michael Chen</p>
                  <p className="text-xs text-muted-foreground">Marketing → Product Design</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <UserMinus className="h-5 w-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">Termination: John Doe</p>
                  <p className="text-xs text-muted-foreground">Operations Manager - Operations</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New Employee
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Briefcase className="h-4 w-4 mr-2" />
                Create Requisition
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <AlertCircle className="h-4 w-4 mr-2" />
                Post Announcement
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Vacation Requests</CardTitle>
            <Badge variant="warning">18 Pending</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Engineering Department</p>
                  <p className="text-xs text-muted-foreground">7 pending requests</p>
                </div>
                <Button size="sm">Review</Button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Sales Department</p>
                  <p className="text-xs text-muted-foreground">5 pending requests</p>
                </div>
                <Button size="sm">Review</Button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div>
                  <p className="font-medium text-sm">Marketing Department</p>
                  <p className="text-xs text-muted-foreground">6 pending requests</p>
                </div>
                <Button size="sm">Review</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recruitment Pipeline</CardTitle>
            <Button size="sm" variant="outline">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">New Applications</span>
                <Badge variant="outline">42</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Screening</span>
                <Badge variant="outline">28</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Interview</span>
                <Badge variant="outline">15</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Offer Extended</span>
                <Badge variant="warning">8</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hired This Month</span>
                <Badge variant="success">12</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Department Headcount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground">Engineering</p>
              <p className="text-2xl font-bold mt-1">87</p>
              <p className="text-xs text-success mt-1">+5 this quarter</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground">Sales</p>
              <p className="text-2xl font-bold mt-1">52</p>
              <p className="text-xs text-success mt-1">+3 this quarter</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground">Marketing</p>
              <p className="text-2xl font-bold mt-1">34</p>
              <p className="text-xs text-success mt-1">+2 this quarter</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <p className="text-sm font-medium text-muted-foreground">Operations</p>
              <p className="text-2xl font-bold mt-1">74</p>
              <p className="text-xs text-success mt-1">+2 this quarter</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
