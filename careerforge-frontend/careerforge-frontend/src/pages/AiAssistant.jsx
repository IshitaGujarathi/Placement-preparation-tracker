import { useState } from "react";
import aiService from "../services/aiServices";

import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Paper,
  TextField,
  Typography
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

function AiAssistant() {

  const theme = useTheme();

  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!message.trim()) return;

    setLoading(true);

    try {

      const res = await aiService.askAI(message);

      setResponse(res.response);

    } catch (err) {

      console.error(err);

      if (err.response) {

        setResponse(
          err.response.data.response ||
          JSON.stringify(err.response.data)
        );

      } else {

        setResponse(err.message);

      }

    }

    setLoading(false);

  };

  return (

    <Box sx={{ p: 4 }}>

      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        🤖 CareerForge AI Assistant
      </Typography>

      <Card
        elevation={5}
        sx={{
          borderRadius: 4
        }}
      >

        <CardContent>

          <Typography
            variant="h6"
            mb={2}
          >
            Ask anything about Placement, Java, DSA, React, SQL or Interviews
          </Typography>

          <TextField
            multiline
            rows={6}
            fullWidth
            placeholder="Ask your question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            variant="contained"
            size="large"
            onClick={askAI}
            sx={{
              mt: 3,
              borderRadius: 3
            }}
          >
            Ask AI
          </Button>

        </CardContent>

      </Card>

      {loading && (

        <Box
          sx={{
            mt: 5,
            textAlign: "center"
          }}
        >

          <CircularProgress />

          <Typography mt={2}>
            AI is Thinking...
          </Typography>

        </Box>

      )}

      {!loading && response && (

        <Paper

          elevation={5}

          sx={{

            mt: 4,

            p: 4,

            borderRadius: 4,

            bgcolor:
              theme.palette.mode === "dark"
                ? "#1E293B"
                : "#F8FAFC",

            color: "text.primary",

            border: "1px solid",

            borderColor: "divider",

            transition: ".3s"

          }}

        >

          <Typography
            variant="h5"
            fontWeight="bold"
            mb={3}
          >
            🤖 AI Response
          </Typography>

          <Typography

            sx={{

              whiteSpace: "pre-wrap",

              lineHeight: 2,

              fontSize: "16px"

            }}

          >

            {response}

          </Typography>

        </Paper>

      )}

    </Box>

  );

}

export default AiAssistant;