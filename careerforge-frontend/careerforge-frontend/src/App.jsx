import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Dsa from "./pages/Dsa";
import Interviews from "./pages/Interviews";
import StudyLogs from "./pages/StudyLogs";
import Certifications from "./pages/Certifications";
import Profile from "./pages/Profile";
import AiAssistant from "./pages/AiAssistant";

export default function App() {

    return (

        <Layout>

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/projects" element={<Projects />} />

                <Route path="/dsa" element={<Dsa />} />

                <Route path="/interviews" element={<Interviews />} />

                <Route path="/studylogs" element={<StudyLogs />} />

                <Route path="/certifications" element={<Certifications />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/ai" element={<AiAssistant />} />

            </Routes>

        </Layout>

    );

}