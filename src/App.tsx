import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MilkProducts from "./pages/MilkProducts";
import UserAuthSystem from "./pages/UserAuthSystem";
import ScanAndSee from "./pages/ScanAndSee";
import ClapSwitch from "./pages/ClapSwitch";
import ToDoList from "./pages/ToDoList";
import TurtleCrossingGame from "./pages/TurtleCrossingGame";
import SnakeGame from "./pages/SnakeGame";
import QuizApp from "./pages/QuizApp";
import WorkSessions from "./pages/WorkSessions";
import PasswordManager from "./pages/PasswordManager";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import PaddleBattle from "./pages/PaddleBattle";
import CertificationsPage from "./components/CertificationsPage";
import Achievements from './pages/Achievements';
import Footer from "@/components/Footer";
import AssemblyVerification from "../src/pages/AssemblyVerification"
import MedicalBillingAnalyzer from "./pages/MedicalBillAnalyzer";
import CampusZ from "./pages/CampusZ";
import Publications from "./pages/Publications";
import SmartQRDocs from "./pages/SmartQRDocs"

const queryClient = new QueryClient();

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.state?.scrollTo;

    if (sectionId && location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollHandler />
        <div className="flex flex-col min-h-screen">  {/* Full height flex container */}
          <div className="flex-grow">                {/* Main content area */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/project/milk-products" element={<MilkProducts />} />
              <Route path="/project/userauth" element={<UserAuthSystem />} />
              <Route path="/project/scan" element={<ScanAndSee />} />
              <Route path="/project/campusz" element={<CampusZ/>}/>
              <Route path="/project/clap" element={<ClapSwitch />} />
              <Route path="/project/todo" element={<ToDoList />} />
              <Route path="/project/turtle" element={<TurtleCrossingGame />} />
              <Route path="/project/snake" element={<SnakeGame />} />
              <Route path="/project/quiz" element={<QuizApp />} />
              <Route path="/project/work" element={<WorkSessions />} />
              <Route path="/project/pass" element={<PasswordManager />} />
              <Route path="/project/padbat" element={<PaddleBattle />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/achievements" element={<Achievements />} /> 
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/publications" element={<Publications/>}/>
              <Route path="/project/assembly" element={<AssemblyVerification/>}/>
              <Route path="/project/qrdocs" element={<SmartQRDocs/>}/>
              <Route path="/medicalbill" element={<MedicalBillingAnalyzer/>}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
