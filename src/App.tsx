import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { supabase } from './lib/supabase';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FloatingClassifyButton from './components/FloatingClassifyButton';

// Lazy load components
const LoginForm = React.lazy(() => import('./components/auth/LoginForm'));
const SignUpForm = React.lazy(() => import('./components/auth/SignUpForm'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const EmailDashboard = React.lazy(() => import('./components/EmailDashboard'));
const LandingPage = React.lazy(() => import('./components/LandingPage'));
const EmailCallback = React.lazy(() => import('./components/email/EmailCallback'));
const ConnectEmail = React.lazy(() => import('./components/email/ConnectEmail'));

// Loading fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useAuthStore((state) => state.user);
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function App() {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Header />
      <FloatingClassifyButton />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <LandingPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/auth/callback" element={<Navigate to="/dashboard" />} />
          <Route path="/auth/gmail/callback" element={<EmailCallback />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div className="flex min-h-screen bg-gray-100">
                  <Sidebar />
                  <div className="flex-1 p-8">
                    <ConnectEmail />
                    <Dashboard />
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/emails"
            element={
              <PrivateRoute>
                <div className="flex min-h-screen bg-gray-100">
                  <Sidebar />
                  <EmailDashboard />
                </div>
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;