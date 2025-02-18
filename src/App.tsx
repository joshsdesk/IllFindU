import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}> {/* ✅ Enable future flags */}
      <Navbar />
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved" element={<SavedCandidates />} />
        <Route path="*" element={<NotFound />} /> {/* ✅ Wildcard 404 route */}
      </Routes>
    </Router>
  );
}

export default App;
