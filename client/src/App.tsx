/**
 * RVCE DebSoc design reminder: The Institutional Seal — use a deliberate route for each
 * editorial window, with a dark institutional shell consistent across every page.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Accolades from "@/pages/Accolades";
import DebateFormat from "@/pages/DebateFormat";
import Home from "@/pages/Home";
import Members from "@/pages/Members";
import NotFound from "@/pages/NotFound";
import SIP from "@/pages/SIP";
import Society from "@/pages/Society";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sip" component={SIP} />
      <Route path="/society" component={Society} />
      <Route path="/accolades" component={Accolades} />
      <Route path="/formats/bp">{() => <DebateFormat format="BP" />}</Route>
      <Route path="/formats/ap">{() => <DebateFormat format="AP" />}</Route>
      <Route path="/members" component={Members} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider><Toaster /><Router /></TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
