import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Upload, Clock, CheckCircle, XCircle } from 'lucide-react';
import { complaintsData } from '../data/dummyData';

const categories = [
  'Payment Issue',
  'Worker Behavior',
  'Employer Behavior',
  'Technical Problem',
  'Safety Concern',
  'Other',
];

export default function ComplaintBoxPage() {
  const [category, setCategory] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Complaint submitted successfully! Ticket ID: #' + Math.floor(Math.random() * 10000));
    setCategory('');
    setSubject('');
    setDescription('');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4" />;
      case 'in-progress':
        return <AlertCircle className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      case 'closed':
        return <XCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'resolved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
      default:
        return '';
    }
  };

  return (
    <div className="py-12">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Complaint Box</h1>
          <p className="text-xl text-muted-foreground">
            We take your concerns seriously. Report any issues and track their resolution.
          </p>
        </div>

        {/* Submit Complaint Form */}
        <Card className="mb-12 border-2 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              Submit a Complaint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the issue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Please provide as much detail as possible..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              <div>
                <Label htmlFor="proof">Upload Proof (Optional)</Label>
                <div className="mt-2 flex items-center gap-2">
                  <Button type="button" variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Supported formats: JPG, PNG, PDF (Max 5MB)
                </p>
              </div>

              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                Submit Complaint
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Previous Complaints */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Previous Complaints</h2>
          <div className="space-y-4">
            {complaintsData.map((complaint) => (
              <Card key={complaint.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm text-muted-foreground">
                          #{complaint.ticketId}
                        </span>
                        <Badge className={getStatusColor(complaint.status)}>
                          <span className="flex items-center gap-1">
                            {getStatusIcon(complaint.status)}
                            {complaint.status.charAt(0).toUpperCase() + complaint.status.slice(1)}
                          </span>
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">{complaint.subject}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{complaint.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Category: {complaint.category}</span>
                        <span>•</span>
                        <span>Submitted: {complaint.date}</span>
                      </div>
                    </div>
                  </div>
                  {complaint.response && (
                    <div className="mt-4 p-4 rounded-lg bg-muted/50 border">
                      <p className="text-sm font-semibold mb-1">Response from Support Team:</p>
                      <p className="text-sm text-muted-foreground">{complaint.response}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Info */}
        <Card className="mt-8 border-2 bg-gradient-to-br from-trust-blue/5 to-trust-green/5">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Need Immediate Assistance?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              For urgent matters, please contact our support team directly:
            </p>
            <div className="space-y-1 text-sm">
              <p>📧 Email: support@gigmarket.com</p>
              <p>📞 Phone: +91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</p>
              <p>⏱️ Average response time: 24-48 hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
