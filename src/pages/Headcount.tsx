import { TrendingUp, Users, UserPlus, UserX, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Select } from '@/components/ui/Select'
import { User } from '@/types'

interface HeadcountProps {
  _user?: User
}

const mockHeadcountData = {
  totalEmployees: 247,
  activeEmployees: 235,
  onLeave: 8,
  contractors: 4,
  hiredThisYear: 23,
  terminatedThisYear: 8,
  headcountByDepartment: [
    { name: 'Engineering', count: 65, target: 70 },
    { name: 'Sales', count: 45, target: 50 },
    { name: 'Marketing', count: 28, target: 30 },
    { name: 'Design', count: 18, target: 20 },
    { name: 'Human Resources', count: 12, target: 12 },
    { name: 'Operations', count: 34, target: 35 },
    { name: 'Finance', count: 22, target: 22 },
    { name: 'Executive', count: 8, target: 8 },
  ],
  headcountByLocation: [
    { name: 'San Francisco', count: 95 },
    { name: 'New York', count: 78 },
    { name: 'Austin', count: 42 },
    { name: 'Seattle', count: 32 },
  ],
}

export function Headcount({}: HeadcountProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Headcount</h1>
          <p className="text-muted-foreground mt-1">
            Workforce analytics and headcount overview
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="2024">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </Select>
          <Button variant="outline">Export Report</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Employees</p>
                <p className="text-3xl font-bold mt-1">{mockHeadcountData.totalEmployees}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Active Today</p>
                <p className="text-3xl font-bold mt-1">{mockHeadcountData.activeEmployees}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {mockHeadcountData.onLeave} on leave
                </p>
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
                <p className="text-sm font-medium text-muted-foreground">Hired This Year</p>
                <p className="text-3xl font-bold mt-1">{mockHeadcountData.hiredThisYear}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Terminated This Year</p>
                <p className="text-3xl font-bold mt-1">{mockHeadcountData.terminatedThisYear}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <UserX className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Headcount by Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockHeadcountData.headcountByDepartment.map((dept) => (
                <div key={dept.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{dept.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {dept.count}/{dept.target}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(dept.count / dept.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Headcount by Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockHeadcountData.headcountByLocation.map((location) => (
                <div key={location.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{location.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <p className="text-sm font-semibold">{location.count}</p>
                    </div>
                    <Badge variant="outline" className="w-16 text-center">
                      {((location.count / mockHeadcountData.totalEmployees) * 100).toFixed(0)}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employment Type Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Full-time</p>
              <p className="text-2xl font-bold">215</p>
              <p className="text-xs text-muted-foreground mt-1">87% of workforce</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Part-time</p>
              <p className="text-2xl font-bold">18</p>
              <p className="text-xs text-muted-foreground mt-1">7% of workforce</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Contractors</p>
              <p className="text-2xl font-bold">10</p>
              <p className="text-xs text-muted-foreground mt-1">4% of workforce</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Interns</p>
              <p className="text-2xl font-bold">4</p>
              <p className="text-xs text-muted-foreground mt-1">2% of workforce</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
