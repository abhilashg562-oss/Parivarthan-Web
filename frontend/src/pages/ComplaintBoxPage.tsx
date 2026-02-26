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
        <Card 
          className="mb-12 border-2 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, rgba(15,15,35,0.95) 0%, rgba(25,25,50,0.95) 100%)',
            borderColor: 'rgba(0,242,255,0.3)',
            boxShadow: '0 0 30px rgba(0,242,255,0.15), inset 0 0 60px rgba(0,242,255,0.03)',
          }}
        >
          <CardHeader>
            <CardTitle 
              className="flex items-center gap-2 text-xl"
              style={{
                color: '#00f2ff',
                textShadow: '0 0 10px rgba(0,242,255,0.5)',
              }}
            >
              <AlertCircle className="h-6 w-6" style={{ color: '#ff00c8', filter: 'drop-shadow(0 0 6px #ff00c8)' }} />
              Submit a Complaint
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label 
                  htmlFor="category" 
                  style={{ color: 'rgba(220,220,240,0.9)' }}
                >
                  Category *
                </Label>
                <Select value={category} onValueChange={setCategory} required>
                  <SelectTrigger 
                    id="category"
                    style={{
                      background: 'rgba(20,20,40,0.8)',
                      borderColor: 'rgba(0,242,255,0.3)',
                      color: '#dcdcf0',
                    }}
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent style={{ background: 'rgba(15,15,35,0.98)', borderColor: 'rgba(0,242,255,0.3)' }}>
                    {categories.map((cat) => (
                      <SelectItem 
                        key={cat} 
                        value={cat}
                        style={{ color: '#dcdcf0' }}
                        className="hover:bg-cyan-500/20"
                      >
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label 
                  htmlFor="subject" 
                  style={{ color: 'rgba(220,220,240,0.9)' }}
                >
                  Subject *
                </Label>
                <Input
                  id="subject"
                  placeholder="Brief description of the issue"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  style={{
                    background: 'rgba(20,20,40,0.8)',
                    borderColor: 'rgba(0,242,255,0.3)',
                    color: '#dcdcf0',
                  }}
                  className="placeholder:text-gray-500"
                />
              </div>

              <div>
                <Label 
                  htmlFor="description" 
                  style={{ color: 'rgba(220,220,240,0.9)' }}
                >
                  Detailed Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Please provide as much detail as possible..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                  style={{
                    background: 'rgba(20,20,40,0.8)',
                    borderColor: 'rgba(0,242,255,0.3)',
                    color: '#dcdcf0',
                  }}
                  className="placeholder:text-gray-500"
                />
              </div>

              <div>
                <Label 
                  htmlFor="proof" 
                  style={{ color: 'rgba(220,220,240,0.9)' }}
                >
                  Upload Proof (Optional)
                </Label>
                <div className="mt-2 flex items-center gap-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                    style={{
                      background: 'rgba(20,20,40,0.8)',
                      borderColor: 'rgba(0,242,255,0.3)',
                      color: '#00f2ff',
                    }}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Choose File
                  </Button>
                </div>
                <p className="text-xs mt-1" style={{ color: 'rgba(220,220,240,0.5)' }}>
                  Supported formats: JPG, PNG, PDF (Max 5MB)
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full"
                style={{
                  background: 'linear-gradient(135deg, #00f2ff 0%, #8a2be2 100%)',
                  color: '#0f0f1a',
                  fontWeight: '600',
                  boxShadow: '0 0 20px rgba(0,242,255,0.4)',
                }}
              >
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
