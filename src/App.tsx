import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Services from "./pages/Services";
import HealthcareOrientation from "./pages/HealthcareOrientation";
import GuidedSetup from "./pages/GuidedSetup";
import OngoingCarePartner from "./pages/OngoingCarePartner";
import PortugalHealthcare from "./pages/PortugalHealthcare";
import SpainHealthcare from "./pages/SpainHealthcare";
import Comparison from "./pages/Comparison";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/healthcare-orientation" element={<HealthcareOrientation />} />
            <Route path="/services/guided-setup" element={<GuidedSetup />} />
            <Route path="/services/ongoing-care-partner" element={<OngoingCarePartner />} />
            <Route path="/portugal-healthcare" element={<PortugalHealthcare />} />
            <Route path="/spain-healthcare" element={<SpainHealthcare />} />
            <Route path="/portugal-vs-spain" element={<Comparison />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
