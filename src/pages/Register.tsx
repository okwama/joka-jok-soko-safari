
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const { toast } = useToast();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    try {
      await register(formData.email, formData.password, formData.name);
      toast({
        title: "Account created!",
        description: "Welcome to JokaJok! Your account has been created successfully.",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again with different credentials.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-swahili-dust-100 to-copper-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-copper-600 rounded-full flex items-center justify-center">
              <span className="text-swahili-dust-50 font-bold text-2xl font-serif">JJ</span>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-serif font-bold text-swahili-dust-800">
            Join JokaJok
          </h2>
          <p className="mt-2 text-sm text-swahili-dust-600">
            Create your account to start your African fashion journey
          </p>
        </div>

        {/* Register Form */}
        <Card className="bg-white shadow-xl border-0">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-serif text-center">Create Account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-swahili-dust-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 bg-swahili-dust-50 border-swahili-dust-200 focus:border-copper-500 focus:ring-copper-500"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-swahili-dust-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 bg-swahili-dust-50 border-swahili-dust-200 focus:border-copper-500 focus:ring-copper-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-swahili-dust-700">
                  Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-swahili-dust-50 border-swahili-dust-200 focus:border-copper-500 focus:ring-copper-500 pr-10"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-swahili-dust-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-swahili-dust-400" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-swahili-dust-700">
                  Confirm Password
                </Label>
                <div className="relative mt-1">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-swahili-dust-50 border-swahili-dust-200 focus:border-copper-500 focus:ring-copper-500 pr-10"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-swahili-dust-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-swahili-dust-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-copper-600 focus:ring-copper-500 border-swahili-dust-300 rounded"
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-swahili-dust-600">
                  I agree to the{' '}
                  <a href="#" className="text-copper-600 hover:text-copper-500">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-copper-600 hover:text-copper-500">Privacy Policy</a>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-copper-600 hover:bg-copper-700 text-white font-medium py-3 text-lg"
              >
                {isLoading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>

            {/* Social Login Options */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-swahili-dust-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-swahili-dust-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-swahili-dust-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-copper-600 hover:text-copper-500">
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
