import { useState } from 'react';
import { Send, MessageCircleQuestion, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

const suggestedQuestions = [
  'How do I request time off?',
  'What are the company holidays?',
  'How do I update my direct deposit?',
  'Where can I find my pay stubs?',
];

export function FAQAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date().toISOString(),
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'assistant',
      content:
        'Thank you for your question. To request time off, navigate to the Vacation Requests page and click "New Request". Fill out the form with your dates and reason, then submit for approval.',
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInputValue('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">FAQ Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Get instant answers to your HR and policy questions
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Chat Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <MessageCircleQuestion className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">How can I help you today?</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-md">
                    Ask me anything about HR policies, benefits, time off, or company procedures
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestedQuestions.map((question, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary"
                        onClick={() => setInputValue(question)}
                      >
                        {question}
                      </Badge>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex gap-2 pt-4 border-t">
                <Input
                  placeholder="Ask a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Popular Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  Time Off Policies
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  Benefits Enrollment
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  Payroll & Pay Stubs
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  Performance Reviews
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                  Company Holidays
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need More Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                If you can't find the answer you're looking for, reach out to our HR team
              </p>
              <Button variant="outline" className="w-full">
                Contact HR
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
