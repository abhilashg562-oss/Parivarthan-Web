import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, TrendingUp } from 'lucide-react';
import { reviewsData } from '../data/dummyData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ratingDistribution = [
  { stars: '5 Star', count: 450 },
  { stars: '4 Star', count: 280 },
  { stars: '3 Star', count: 120 },
  { stars: '2 Star', count: 45 },
  { stars: '1 Star', count: 25 },
];

export default function ReviewCentrePage() {
  const [filter, setFilter] = useState<'all' | 'worker' | 'employer'>('all');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const filteredReviews = reviewsData.filter(
    (review) => filter === 'all' || review.userType === filter
  );

  const averageRating = 4.8;
  const totalReviews = reviewsData.length;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to backend
    alert('Review submitted successfully!');
    setReviewText('');
    setRating(5);
  };

  return (
    <div className="py-12">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Review Centre</h1>
          <p className="text-xl text-muted-foreground">
            Read reviews and share your experience with the GigMarket community
          </p>
        </div>

        {/* Ratings Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl font-bold text-trust-blue">{averageRating}</div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(averageRating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Based on {totalReviews} reviews</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-trust-green" />
                Rating Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={ratingDistribution}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="stars" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="oklch(var(--trust-blue))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <div className="mb-6">
          <Label className="mb-2 block">Filter Reviews</Label>
          <Select value={filter} onValueChange={(value: any) => setFilter(value)}>
            <SelectTrigger className="w-full md:w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Reviews</SelectItem>
              <SelectItem value="worker">Worker Reviews</SelectItem>
              <SelectItem value="employer">Employer Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reviews List */}
        <div className="space-y-4 mb-12">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-trust-blue to-trust-green flex items-center justify-center text-white font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold">{review.rating}.0</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{review.text}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      review.userType === 'worker'
                        ? 'bg-trust-green/10 text-trust-green'
                        : 'bg-trust-blue/10 text-trust-blue'
                    }`}
                  >
                    {review.userType === 'worker' ? 'Worker' : 'Employer'}
                  </span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Write Review Form */}
        <Card className="border-2 bg-gradient-to-br from-trust-blue/5 to-trust-green/5">
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <Label className="mb-2 block">Your Rating</Label>
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i + 1)}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 cursor-pointer transition-colors ${
                          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="review">Your Review</Label>
                <Textarea
                  id="review"
                  placeholder="Share your experience with GigMarket..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="bg-trust-blue hover:bg-trust-blue/90">
                Submit Review
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
