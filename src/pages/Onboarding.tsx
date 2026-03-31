import { useState } from 'react'
import {
  GraduationCap,
  CheckCircle2,
  Circle,
  Plus,
  Filter,
  Calendar,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { User, OnboardingTask, OnboardingStatus } from '@/types'

interface OnboardingProps {
  _user?: User
}

const mockOnboardingPlans = [
  {
    id: '1',
    employeeName: 'Alex Thompson',
    status: 'in_progress' as OnboardingStatus,
    completionPercentage: 65,
    startDate: '2024-12-01',
    dueDate: '2024-12-15',
    tasks: 20,
    completedTasks: 13,
  },
  {
    id: '2',
    employeeName: 'Maria Garcia',
    status: 'not_started' as OnboardingStatus,
    completionPercentage: 0,
    startDate: '2024-12-05',
    dueDate: '2024-12-19',
    tasks: 20,
    completedTasks: 0,
  },
  {
    id: '3',
    employeeName: 'James Wilson',
    status: 'completed' as OnboardingStatus,
    completionPercentage: 100,
    startDate: '2024-11-15',
    dueDate: '2024-11-29',
    tasks: 18,
    completedTasks: 18,
  },
]

const mockTasks: OnboardingTask[] = [
  {
    id: '1',
    title: 'Complete profile information',
    description: 'Add your personal and professional information',
    required: true,
    completed: true,
    dueDate: '2024-12-02',
    category: 'Admin',
  },
  {
    id: '2',
    title: 'Review company policies',
    description: 'Read and acknowledge company handbook',
    required: true,
    completed: true,
    dueDate: '2024-12-02',
    category: 'Compliance',
  },
  {
    id: '3',
    title: 'Set up direct deposit',
    description: 'Link your bank account for payroll',
    required: true,
    completed: false,
    dueDate: '2024-12-05',
    category: 'Admin',
  },
  {
    id: '4',
    title: 'Submit I-9 verification',
    description: 'Provide employment eligibility documentation',
    required: true,
    completed: false,
    dueDate: '2024-12-05',
    category: 'Compliance',
  },
  {
    id: '5',
    title: 'Complete security training',
    description: 'Information security and data protection course',
    required: true,
    completed: false,
    dueDate: '2024-12-08',
    category: 'Training',
  },
  {
    id: '6',
    title: 'Meet your manager',
    description: 'Initial 1-on-1 meeting to discuss role and goals',
    required: true,
    completed: false,
    dueDate: '2024-12-03',
    category: 'Meeting',
  },
  {
    id: '7',
    title: 'Tour office facilities',
    description: 'Get familiar with office layout and amenities',
    required: false,
    completed: false,
    dueDate: '2024-12-02',
    category: 'Onboarding',
  },
  {
    id: '8',
    title: 'Enroll in benefits',
    description: 'Select health insurance and retirement plans',
    required: true,
    completed: false,
    dueDate: '2024-12-10',
    category: 'Benefits',
  },
]

function getStatusBadge(status: OnboardingStatus) {
  switch (status) {
    case 'completed':
      return <Badge variant="success">Completed</Badge>
    case 'in_progress':
      return <Badge variant="warning">In Progress</Badge>
    case 'not_started':
      return <Badge variant="outline">Not Started</Badge>
  }
}

export function Onboarding({}: OnboardingProps) {
  const [_selectedPlan, _setSelectedPlan] = useState<string | null>(null)
  const [completedTasks, setCompletedTasks] = useState<string[]>(
    mockTasks.filter((t) => t.completed).map((t) => t.id)
  )

  const toggleTaskComplete = (taskId: string) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    )
  }

  const completionPercentage = mockTasks.length
    ? ((completedTasks.length / mockTasks.length) * 100).toFixed(0)
    : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Onboarding</h1>
          <p className="text-muted-foreground mt-1">
            Manage employee onboarding plans and tasks
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Plan
          </Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="admin" className="w-full">
        <TabsList>
          <TabsTrigger value="admin">HR Admin View</TabsTrigger>
          <TabsTrigger value="employee">Employee View</TabsTrigger>
        </TabsList>

        <TabsContent value="admin">
          <div className="space-y-4">
            {mockOnboardingPlans.map((plan) => (
              <Card
                key={plan.id}
                className="cursor-pointer hover:shadow-md transition-all"
                onClick={() => _setSelectedPlan(plan.id)}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{plan.employeeName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Started {plan.startDate} • Due {plan.dueDate}
                      </p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(plan.status)}
                      <p className="text-sm font-medium mt-2">
                        {plan.completedTasks}/{plan.tasks} tasks
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">Completion</span>
                      <span className="text-sm text-muted-foreground">
                        {plan.completionPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all"
                        style={{ width: `${plan.completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="employee">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Your Onboarding Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Overall Completion</span>
                    <span className="text-2xl font-bold">{completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-primary h-3 rounded-full transition-all"
                      style={{ width: `${completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {completedTasks.length} of {mockTasks.length} tasks completed
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-4">Onboarding Tasks</h3>

                  <div className="space-y-6">
                    {['Admin', 'Compliance', 'Training', 'Meeting', 'Onboarding', 'Benefits']
                      .filter((cat) => mockTasks.some((t) => t.category === cat))
                      .map((category) => (
                        <div key={category}>
                          <h4 className="text-sm font-medium text-muted-foreground mb-3">
                            {category}
                          </h4>
                          <div className="space-y-3">
                            {mockTasks
                              .filter((task) => task.category === category)
                              .map((task) => (
                                <div
                                  key={task.id}
                                  className="flex items-start gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                                >
                                  <button
                                    onClick={() => toggleTaskComplete(task.id)}
                                    className="flex-shrink-0 mt-1"
                                  >
                                    {completedTasks.includes(task.id) ? (
                                      <CheckCircle2 className="h-5 w-5 text-success" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-muted-foreground" />
                                    )}
                                  </button>

                                  <div className="flex-1">
                                    <div className="flex items-start justify-between gap-2">
                                      <div>
                                        <p
                                          className={`font-medium ${
                                            completedTasks.includes(task.id)
                                              ? 'line-through text-muted-foreground'
                                              : ''
                                          }`}
                                        >
                                          {task.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          {task.description}
                                        </p>
                                      </div>
                                      <div className="flex gap-2 flex-shrink-0">
                                        {task.required && (
                                          <Badge variant="outline" className="text-xs">
                                            Required
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                    {task.dueDate && (
                                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                                        <Calendar className="h-3 w-3" />
                                        Due {task.dueDate}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
