import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Leaf, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="relative z-10 w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="font-bold text-2xl text-foreground">
            Agro<span className="text-primary">Cycle</span> AI
          </span>
        </div>

        <Card className="border-border/50 shadow-xl">
          <Tabs defaultValue="login">
            <CardHeader className="pb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Log In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </CardHeader>
            <CardContent>
              <TabsContent value="login" className="mt-0">
                <CardTitle className="text-xl mb-1">Welcome back</CardTitle>
                <CardDescription className="mb-6">Enter your credentials to access your dashboard</CardDescription>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="login-email" type="email" placeholder="you@example.com" className="pl-9" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="login-password" type="password" placeholder="••••••••" className="pl-9" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Log In <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-0">
                <CardTitle className="text-xl mb-1">Create an account</CardTitle>
                <CardDescription className="mb-6">Get started with AgroCycle AI today</CardDescription>
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-name" placeholder="John Doe" className="pl-9" value={signupName} onChange={e => setSignupName(e.target.value)} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-email" type="email" placeholder="you@example.com" className="pl-9" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="signup-password" type="password" placeholder="••••••••" className="pl-9" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          <Link to="/" className="hover:text-primary transition-colors">← Back to home</Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
