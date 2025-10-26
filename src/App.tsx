import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import MainDashboard from "./pages/MainDashboard";
import ResidenceDashboard from "./pages/ResidenceDashboard";
import TrusteesDashboard from "./pages/TrusteesDashboard";
import ManagingAgentDashboard from "./pages/ManagingAgentDashboard";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { initButtonEffects } from "./scripts/buttons";
import { LoadingScreen } from "@/components/LoadingScreen";

const queryClient = new QueryClient();

// Component to reinitialize button effects on route change
const RouteChangeHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Initialize button effects after route change and DOM update
    const timer = setTimeout(() => {
      initButtonEffects();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // Also initialize on first mount
  useEffect(() => {
    initButtonEffects();
  }, []);
  
  return null;
};

const App = () => {
  // Only show loading video on first visit (per session)
  const [loadingComplete, setLoadingComplete] = useState(() => {
    return sessionStorage.getItem('introVideoShown') === 'true';
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('introVideoShown', 'true');
    setLoadingComplete(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!loadingComplete && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
        <BrowserRouter>
          <RouteChangeHandler />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/demo" element={<MainDashboard />} />
                <Route path="/residence" element={<ResidenceDashboard />} />
                <Route path="/trustees" element={<TrusteesDashboard />} />
                <Route path="/managing-agent" element={<ManagingAgentDashboard />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/security" element={<Security />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
