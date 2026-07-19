import {
  Box,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  CircularProgress,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import CountUp from "react-countup";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import projectService from "../services/projectService";
import dsaService from "../services/dsaService";
import interviewService from "../services/interviewService";
import certificationService from "../services/certificationService";
import studyLogService from "../services/studyLogService";

export default function Dashboard() {

  const navigate = useNavigate();

 const [projects, setProjects] = useState([]);
const [dsa, setDsa] = useState([]);
const [interviews, setInterviews] = useState([]);
const [certifications, setCertifications] = useState([]);
const [studyLogs, setStudyLogs] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadDashboard();

    const interval = setInterval(() => {
      loadDashboard();
    }, 30000);

    return () => clearInterval(interval);

  }, []);
const loadDashboard = async () => {
  try {
    console.log("Loading dashboard...");

    const projectRes = await projectService.getAll();
    console.log("Projects:", projectRes);

    const dsaRes = await dsaService.getAll();
    console.log("DSA:", dsaRes);

    const interviewRes = await interviewService.getAll();
    console.log("Interviews:", interviewRes);

    const certificationRes = await certificationService.getAll();
    console.log("Certificates:", certificationRes);

    const studyLogRes = await studyLogService.getAll();
    console.log("Study Logs:", studyLogRes);

    setProjects(projectRes.data || []);
    setDsa(dsaRes.data || []);
    setInterviews(interviewRes.data || []);
    setCertifications(certificationRes.data || []);
    setStudyLogs(studyLogRes.data || []);
  } catch (err) {
    console.error("Dashboard Error:", err);
  }
};

  const totalRecords =
    projects.length +
    dsa.length +
    interviews.length +
    certifications.length +
    studyLogs.length;

  const readiness = Math.min(
    100,
    Math.round(
      (
        projects.length * 20 +
        dsa.length * 2 +
        certifications.length * 10 +
        interviews.length * 15 +
        studyLogs.length
      ) / 5
    )
  );

  const cards = [
    {
      title: "Projects",
      value: projects.length,
      icon: <FolderIcon sx={{ fontSize: 48 }} />,
      color: "linear-gradient(135deg,#2563EB,#1D4ED8)",
      path: "/projects",
    },
    {
      title: "DSA Solved",
      value: dsa.length,
      icon: <CodeIcon sx={{ fontSize: 48 }} />,
      color: "linear-gradient(135deg,#10B981,#059669)",
      path: "/dsa",
    },
    {
      title: "Certificates",
      value: certifications.length,
      icon: <EmojiEventsIcon sx={{ fontSize: 48 }} />,
      color: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
      path: "/certifications",
    },
    {
      title: "Interviews",
      value: interviews.length,
      icon: <WorkIcon sx={{ fontSize: 48 }} />,
      color: "linear-gradient(135deg,#F97316,#EA580C)",
      path: "/interviews",
    },
    {
      title: "Study Logs",
      value: studyLogs.length,
      icon: <MenuBookIcon sx={{ fontSize: 48 }} />,
      color: "linear-gradient(135deg,#EC4899,#BE185D)",
      path: "/study-logs",
    },
  ];

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="80vh"
      >
        <CircularProgress size={70} />

        <Typography mt={3} variant="h6">
          Loading Dashboard...
        </Typography>
      </Box>
    );
  }

  return (    <Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        👋 Welcome Back
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        mb={4}
      >
        Let's continue your placement preparation today.
      </Typography>

      <Grid container spacing={3}>

        {cards.map((card, index) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
          >

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
            >

              <Paper
                elevation={8}
                onClick={() => navigate(card.path)}
                sx={{
                  p: 3,
                  borderRadius: 5,
                  cursor: "pointer",
                  color: "#fff",
                  background: card.color,
                  transition: "all .35s ease",
                  height: 180,

                  "&:hover": {
                    boxShadow:
                      "0px 25px 50px rgba(0,0,0,.30)",
                  },
                }}
              >

                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >

                  {card.icon}

                  <Typography
                    variant="h3"
                    fontWeight="bold"
                  >
                    <CountUp
                      start={0}
                      end={card.value}
                      duration={2}
                    />
                  </Typography>

                </Box>

                <Typography
                  variant="h6"
                  mt={3}
                  fontWeight="bold"
                >
                  {card.title}
                </Typography>

              </Paper>

            </motion.div>

          </Grid>

        ))}

      </Grid>

      <Paper
        elevation={4}
        sx={{
          mt: 5,
          p: 4,
          borderRadius: 5,
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          🚀 Placement Readiness
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          fontWeight="bold"
        >
          <CountUp
            start={0}
            end={readiness}
            duration={2}
          />
          %
        </Typography>

        <LinearProgress
          variant="determinate"
          value={readiness}
          sx={{
            mt: 3,
            height: 12,
            borderRadius: 10,
          }}
        />

        <Grid
          container
          spacing={3}
          mt={2}
        >

          <Grid
            item
            xs={12}
            md={6}
          >

            <Typography sx={{ mb: 1 }}>
              📁 Projects :
              <strong> {projects.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              💻 DSA Solved :
              <strong> {dsa.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              💼 Interviews :
              <strong> {interviews.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              🏆 Certifications :
              <strong> {certifications.length}</strong>
            </Typography>

          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >

            <Typography sx={{ mb: 1 }}>
              📖 Study Logs :
              <strong> {studyLogs.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              📊 Total Records :
              <strong> {totalRecords}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              🤖 AI Assistant :
              <strong> Ready</strong>
            </Typography>

            <Typography
              color="text.secondary"
              mt={2}
            >
              Keep solving DSA, building projects,
              attending interviews and updating
              certifications to increase your
              placement readiness.
            </Typography>

          </Grid>

        </Grid>

      </Paper>
            <Paper
        elevation={4}
        sx={{
          mt: 4,
          p: 4,
          borderRadius: 5,
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          📌 Quick Summary
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 4,
                bgcolor: "#f8fafc",
                height: "100%",
              }}
            >

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                📊 Statistics
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Total Records :
                <strong> {totalRecords}</strong>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Placement Readiness :
                <strong> {readiness}%</strong>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Total Projects :
                <strong> {projects.length}</strong>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Total DSA Questions :
                <strong> {dsa.length}</strong>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Total Certifications :
                <strong> {certifications.length}</strong>
              </Typography>

              <Typography sx={{ mb: 1 }}>
                Total Interviews :
                <strong> {interviews.length}</strong>
              </Typography>

              <Typography>
                Total Study Logs :
                <strong> {studyLogs.length}</strong>
              </Typography>

            </Paper>

          </Grid>

          <Grid item xs={12} md={6}>

            <Paper
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 4,
                background:
                  "linear-gradient(135deg,#2563EB,#7C3AED)",
                color: "white",
                height: "100%",
              }}
            >

              <Typography
                variant="h6"
                fontWeight="bold"
                mb={2}
              >
                🎯 Today's Goal
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ✔ Solve at least 2 DSA Problems
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ✔ Update Study Log
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ✔ Build or Improve One Project
              </Typography>

              <Typography sx={{ mb: 1 }}>
                ✔ Revise Core Subjects
              </Typography>

              <Typography sx={{ mt: 3 }}>
                Small progress every day leads to big success.
              </Typography>

            </Paper>

          </Grid>

        </Grid>

      </Paper>

      <Paper
        elevation={4}
        sx={{
          mt: 4,
          p: 4,
          borderRadius: 5,
        }}
      >

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
        >
          💡 Placement Tips
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          • Solve DSA consistently every day.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          • Build at least two strong Full Stack Projects.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          • Keep your Resume and LinkedIn updated.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          • Practice Aptitude daily.
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 1 }}>
          • Revise Java, DBMS, OOP, SQL and OS regularly.
        </Typography>

      </Paper>

      <Box
        mt={5}
        textAlign="center"
      >

        <Typography
          variant="body2"
          color="text.secondary"
        >
          🚀 CareerForge Placement Tracker
        </Typography>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          Built with React • Material UI • Spring Boot
        </Typography>

      </Box>

    </Box>

  );

}