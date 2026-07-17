import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import CodeIcon from "@mui/icons-material/Code";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkIcon from "@mui/icons-material/Work";

// import CountUp from "react-countup";
// import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import projectService from "../services/projectService";
import dsaService from "../services/dsaService";
import interviewService from "../services/interviewService";
import certificationService from "../services/certificationService";
import studyLogService from "../services/studyLogService";

// import ProgressCharts from "../components/dashboard/ProgressCharts";

export default function Dashboard() {

  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [dsa, setDsa] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [studyLogs, setStudyLogs] = useState([]);

  useEffect(() => {

    loadDashboard();

    const interval = setInterval(() => {
      loadDashboard();
    }, 2000);

    return () => clearInterval(interval);

  }, []);

  const loadDashboard = async () => {

    try {

      const [
        projectRes,
        dsaRes,
        interviewRes,
        certificationRes,
        studyLogRes,
      ] = await Promise.all([
        projectService.getAll(),
        dsaService.getAll(),
        interviewService.getAll(),
        certificationService.getAll(),
        studyLogService.getAll(),
      ]);

      setProjects(projectRes.data || []);
      setDsa(dsaRes.data || []);
      setInterviews(interviewRes.data || []);
      setCertifications(certificationRes.data || []);
      setStudyLogs(studyLogRes.data || []);

    } catch (error) {

      console.error(error);

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
        projects.length * 15 +
        dsa.length * 2 +
        certifications.length * 8 +
        interviews.length * 10 +
        studyLogs.length
      ) / 5
    )
);


  const cards = [

    {
      title: "Projects",
      value: projects.length,
      icon: <FolderIcon sx={{ fontSize: 45 }} />,
      color: "linear-gradient(135deg,#2563EB,#1D4ED8)",
      path: "/projects",
    },

    {
      title: "DSA Solved",
      value: dsa.length,
      icon: <CodeIcon sx={{ fontSize: 45 }} />,
      color: "linear-gradient(135deg,#10B981,#059669)",
      path: "/dsa",
    },

    {
      title: "Certificates",
      value: certifications.length,
      icon: <EmojiEventsIcon sx={{ fontSize: 45 }} />,
      color: "linear-gradient(135deg,#8B5CF6,#6D28D9)",
      path: "/certifications",
    },

    {
      title: "Interviews",
      value: interviews.length,
      icon: <WorkIcon sx={{ fontSize: 45 }} />,
      color: "linear-gradient(135deg,#F97316,#EA580C)",
      path: "/interviews",
    },

  ];

  return (

    <Box>

      <Typography
        variant="h3"
        fontWeight="bold"
        mb={1}
      >
        Welcome Back 👋
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        mb={4}
      >
        Let's continue your placement preparation today.
      </Typography>

      <Grid container spacing={3}>        {cards.map((card, index) => (

          <Grid
            item xs={12} sm={6} lg={3}
            key={index}
          >

            <div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >

              <Paper
                elevation={8}
                onClick={() => navigate(card.path)}
                sx={{
                  p: 3,
                  borderRadius: 5,
                  cursor: "pointer",
                  color: "white",
                  background: card.color,
                  transition: ".3s",

                  "&:hover": {
                    boxShadow: "0px 20px 40px rgba(0,0,0,.25)",
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

                    {card.value}

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

            </div>

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
          mb={3}
        >
          🚀 Placement Readiness ({readiness}%)
        </Typography>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <Typography sx={{ mb: 1 }}>
              📁 Projects :
              <strong> {projects.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              💻 DSA :
              <strong> {dsa.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              💼 Interviews :
              <strong> {interviews.length}</strong>
            </Typography>

            <Typography>
              🏆 Certifications :
              <strong> {certifications.length}</strong>
            </Typography>

          </Grid>

          <Grid item xs={12} md={6}>            <Typography sx={{ mb: 1 }}>
              📖 Study Logs :
              <strong> {studyLogs.length}</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              🤖 AI Assistant :
              <strong> Ready</strong>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              📊 Total Records :
              <strong> {totalRecords}</strong>
            </Typography>

            <Typography
              color="text.secondary"
              mt={2}
            >
              Keep updating your Projects, DSA, Certifications,
              Interviews and Study Logs to improve your placement
              readiness.
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

        <Typography color="text.secondary">
          Total Records :
          <strong> {totalRecords}</strong>
        </Typography>

        <Typography
          color="text.secondary"
          mt={2}
        >
          Click on any dashboard card above to manage that section.
          Every change you make in Projects, DSA, Certifications,
          Interviews or Study Logs will automatically refresh here.
        </Typography>

      </Paper>

      {/* <Box mt={5}>

        <ProgressCharts />

      </Box>    </Box> */}
  </Box> 
  );
}
