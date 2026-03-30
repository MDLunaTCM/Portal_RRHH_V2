import { useState } from 'react'
import { LogOut, LogIn, ArrowRight, Search, Filter, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { User, EmployeeMovement, MovementType } from '@/types'

interface EmployeeMovementsProps {
  _user?: User
}

const mockMovements: EmployeeMovement[] = [
  {
    id: '1',
    employeeId: '101',
    employeeName: 'Sarah Johnson',
    movementType: 'hire',
    date: '2024-12-01',
    fromValue: undefined,
    toValue: 'Engineering',
    details: 'Senior Software Engineer hired from TechCorp',
  },
  {
    id: '2',
    employeeId: '102',
    employeeName: 'Michael Chen',
    movementType: 'position_change',
    date: '2024-11-28',
    fromValue: 'Junior Engineer',
    toValue: 'Mid-level Engineer',
    details: 'Promoted based on performance review',
  },
  {
    id: '3',
    employeeId: '103',
    employeeName: 'Emily Rodriguez',
    movementType: 'department_change',
    date: '2024-11-20',
    fromValue: 'Marketing',
    toValue: 'Product',
    details: 'Lateral move to Product Marketing team',
  },
  {
    id: '4',
    employeeId: '104',
    employeeName: 'David Kim',
    movementType: 'termination',
    date: '2024-11-15',
    fromValue: 'Analytics',
    toValue: undefined,
    details: 'Resigned to pursue other opportunities',
  },
  {
    id: '5',
    employeeId: '105',
    employeeName: 'Jessica Martinez',
    movementType: 'hire',
    date: '2024-11-10',
    fromValue: undefined,
    toValue: 'Sales',
    details: 'Account Executive hired externally',
  },
]

function getMovementIcon(type: MovementType) {
  switch (type) {
    case 'hire':
      return <LogIn className="h-5 w-5 text-green-600" />
    case 'termination':
      return <LogOut className="h-5 w-5 text-red-600" />
    case 'department_change':
    case 'position_change':
      return <ArrowRight className="h-5 w-5 text-blue-600" />
  }
}

function getMovementLabel(type: MovementType) {
  switch (type) {
    case 'hire':
      return 'New Hire'
    case 'termination':
      return 'Termination'
    case 'department_change':
      return 'Department Change'
    case 'position_change':
      return 'Position Change'
  }
}

function getMovementColor(type: MovementType) {
  switch (type) {
    case 'hire':
      return 'bg-green-100 text-green-700'
    case 'termination':
      return 'bg-red-100 text-red-700'
    case 'department_change':
    case 'position_change':
      return 'bg-blue-100 text-blue-700'
  }
}

export function EmployeeMovements({}: EmployeeMovementsProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')

  const filteredMovements = mockMovements.filter((movement) => {
    const matchesSearch =
      searchQuery === '' ||
      movement.employeeName.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesType = typeFilter === 'all' || movement.movementType === typeFilter

    // Simple date filtering
    const matchesDate = dateFilter === 'all' || dateFilter === 'recent'

    return matchesSearch && matchesType && matchesDate
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Employee Movements</h1>
        <p className="text-muted-foreground mt-1">
          Track hires, terminations, promotions, and transfers
        </p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by employee name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">All Types</option>
              <option value="hire">New Hire</option>
              <option value="termination">Termination</option>
              <option value="department_change">Department Change</option>
              <option value="position_change">Position Change</option>
            </Select>

            <Select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
              <option value="all">All Dates</option>
              <option value="recent">Last 30 Days</option>
            </Select>

            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {filteredMovements.map((movement) => (
          <Card key={movement.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{getMovementIcon(movement.movementType)}</div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{movement.employeeName}</h3>
                        <Badge className={`text-xs ${getMovementColor(movement.movementType)}`}>
                          {getMovementLabel(movement.movementType)}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        {movement.movementType === 'hire' && (
                          <p className="text-sm text-muted-foreground">
                            Hired into <span className="font-medium">{movement.toValue}</span>
                          </p>
                        )}

                        {movement.movementType === 'termination' && (
                          <p className="text-sm text-muted-foreground">
                            Terminated from{' '}
                            <span className="font-medium">{movement.fromValue}</span>
                          </p>
                        )}

                        {movement.movementType === 'department_change' && (
                          <p className="text-sm text-muted-foreground">
                            Moved from <span className="font-medium">{movement.fromValue}</span> to{' '}
                            <span className="font-medium">{movement.toValue}</span>
                          </p>
                        )}

                        {movement.movementType === 'position_change' && (
                          <p className="text-sm text-muted-foreground">
                            Promoted from <span className="font-medium">{movement.fromValue}</span>{' '}
                            to <span className="font-medium">{movement.toValue}</span>
                          </p>
                        )}

                        {movement.details && (
                          <p className="text-sm text-muted-foreground italic">
                            {movement.details}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-right flex-shrink-0">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{movement.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
