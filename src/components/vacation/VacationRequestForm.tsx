import { X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Textarea } from '@/components/ui/Textarea';

interface VacationRequestFormProps {
  onClose: () => void;
}

export function VacationRequestForm({ onClose }: VacationRequestFormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>New Vacation Request</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="startDate" className="block text-sm font-medium mb-2">
                  Start Date
                </label>
                <Input type="date" id="startDate" required />
              </div>

              <div>
                <label htmlFor="endDate" className="block text-sm font-medium mb-2">
                  End Date
                </label>
                <Input type="date" id="endDate" required />
              </div>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium mb-2">
                Request Type
              </label>
              <Select id="type" required>
                <option value="">Select a type</option>
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="personal">Personal Leave</option>
                <option value="unpaid">Unpaid Leave</option>
              </Select>
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium mb-2">
                Reason
              </label>
              <Textarea
                id="reason"
                placeholder="Please provide a brief reason for your request"
                rows={4}
              />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-medium mb-2">Request Summary</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Total days requested: 5 business days</p>
                <p>Remaining balance after approval: 15 days</p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Submit Request</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
